import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Organization } from '../model/Organization';

@Component({
  selector: 'app-org-register',
  templateUrl: './org-register.component.html',
  styleUrls: ['./org-register.component.css']
})
export class OrgRegisterComponent implements OnInit {

  org : Organization
  errorFlag : boolean
  successFlag : boolean
  error: string;
  errorStyle: string;

  constructor(public auth: AuthService, public router: Router) { 
    this.org = new Organization()
    this.error = '';
    this.errorStyle = 'form-text text-danger';
  }
  ngOnInit(): void {
  }
  registerOrg(regForm){
    this.errorFlag = false
    this.successFlag = false
    if(regForm.password != regForm.cpassword){
      alert("Please enter your password properly. Password and Confirm Password should be same.")
      return 0;
    }
    this.auth.orgRegister(this.org).subscribe((res:any) => {
      if(res === null){
        this.errorFlag = true
      }
      else{
        this.successFlag = true
      }
    })
    this.org = new Organization()
    regForm.form.markAsPristine()
  }
  registerbtn(){
    this.successFlag = false
  }
  validatePass() {
    let pass: string = (<HTMLInputElement>document.getElementById('pass'))
      .value;
    let cpass: string = (<HTMLInputElement>document.getElementById('cpass'))
      .value;
    console.log(pass, cpass);
    if (pass === cpass) {
      this.error = 'The passwords match.';
      this.errorStyle = 'form-text text-success';
    } else {
      this.error = 'The passwords do not match.';
      this.errorStyle = 'form-text text-danger';
    }
  }
}
