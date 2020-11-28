import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Patient } from '../model/Patient';

@Component({
  selector: 'app-pat-register',
  templateUrl: './pat-register.component.html',
  styleUrls: ['./pat-register.component.css'],
})
export class PatRegisterComponent implements OnInit {
  pat: Patient;
  errorFlag: boolean;
  successFlag: boolean;
  confPassError: string;
  diseases: any[];
  constructor(public auth: AuthService, public router: Router) {
    this.pat = new Patient();
    this.confPassError = '';
  }
  ngOnInit(): void {
    this.auth.getDistinctDisease().subscribe((res: any[]) => {
      this.diseases = res;
    });
  }
  patientSubmit(patRegForm) {
    this.errorFlag = false;
    this.successFlag = false;
    this.auth.patRegister(this.pat).subscribe((res: any) => {
      if (res === null) {
        this.errorFlag = true;
      } else {
        this.successFlag = true;
      }
    });
    this.pat = new Patient();
    patRegForm.form.markAsPristine();
  }
  registerbtn() {
    this.successFlag = false;
  }
  validatePass() {
    let pass: string = (<HTMLInputElement>document.getElementById('pass'))
      .value;
    let cpass: string = (<HTMLInputElement>document.getElementById('cpass'))
      .value;
    console.log(pass, cpass);
    if (pass != cpass) this.confPassError = "The passwords don't match.";
  }
}
