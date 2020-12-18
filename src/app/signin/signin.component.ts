import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Login } from '../model/login';
import { Patient } from '../model/Patient';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  currentUser: Patient;
  login: Login;
  roledata: String;
  errorFlag: boolean;
  constructor(public auth: AuthService, public router: Router) {
    this.login = new Login();
    this.roledata = '';
  }

  ngOnInit(): void {}
  loginSubmit(loginForm) {
    this.errorFlag = false;
    if (this.roledata === 'org') {
      this.auth.signInOrg(this.login).subscribe((res: any) => {
        if (res === null) {
          this.errorFlag = true;
        } else {
          this.auth.currentorg = res;
          this.auth.isLoggedIn = true;
          this.router.navigateByUrl('/home/org');
        }
      });
    } else if (this.roledata === 'pat') {
      this.auth.signInPat(this.login).subscribe((res: any) => {
        if (res === null) {
          this.errorFlag = true;
        } else {
          this.auth.currentuser = res;
          this.auth.isLoggedIn = true;
          this.router.navigateByUrl('/home/patient');
        }
      });
    }
    this.login = new Login();
    loginForm.form.markAsPristine();
  }
}
