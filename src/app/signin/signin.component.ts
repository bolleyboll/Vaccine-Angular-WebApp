import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Login } from '../model/login';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  login: Login;
  roledata: String
  errorFlag: boolean
  constructor(public auth: AuthService, public router: Router) {
    this.login = new Login();
    this.roledata = ''
  }

  ngOnInit(): void { }
  loginSubmit(loginForm) {
    this.errorFlag = false
    if (this.roledata === "org") {
      this.auth.signInOrg(this.login).subscribe((res: any) => {
        if (res === null) {
          this.errorFlag = true
        }
        else {
          this.auth.data = res
          console.log(this.auth.data)
        }
      })
    }
    else if (this.roledata === "pat") {
      this.auth.signInPat(this.login).subscribe((res: any) => {
        if (res === null) {
          this.errorFlag = true
        }
        else {
          this.auth.data = res
          console.log(this.auth.data)
        }
      })
    }
    this.login = new Login()
    loginForm.form.markAsPristine()
  }
}
