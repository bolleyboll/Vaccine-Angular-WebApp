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
  constructor(public auth: AuthService, public router: Router) { 
    this.org = new Organization()
  }
  ngOnInit(): void {
  }
  registerOrg(regForm){
    this.errorFlag = false
    this.successFlag = false
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

}
