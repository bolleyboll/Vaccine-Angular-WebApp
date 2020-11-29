import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Login } from '../model/login';
import { Organization } from '../model/Organization';

@Component({
  selector: 'app-org-delete',
  templateUrl: './org-delete.component.html',
  styleUrls: ['./org-delete.component.css']
})
export class OrgDeleteComponent implements OnInit {
  del: Login
  errorFlag: boolean
  successFlag : boolean

  constructor(public auth: AuthService, public router: Router) {
    this.del = new Login()
   }

  ngOnInit(): void {
  }

  deleteSubmit(deleteForm){
    console.log(this.del)
    console.log(this.auth.currentorg)
    this.errorFlag = false
    this.successFlag =false
    if((this.del.email===this.auth.currentorg.email)&&(this.del.password===this.auth.currentorg.password))
    {
        this.successFlag = true
    }
    else
    {
      this.errorFlag = true
    }
    this.del = new Login()
    deleteForm.form.markAsPristine()
    console.log(this.successFlag,this.errorFlag)
  }
}
