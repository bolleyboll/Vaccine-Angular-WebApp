import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Vaccine } from '../model/Vaccine';

@Component({
  selector: 'app-vacc-edit',
  templateUrl: './vacc-edit.component.html',
  styleUrls: ['./vacc-edit.component.css']
})
export class VaccEditComponent implements OnInit {

  vacc:Vaccine
  vaccname:String
  disname:String
  errorFlag:boolean
  successFlag:boolean

  constructor(public auth:AuthService) { 
    this.vacc= new Vaccine()
    this.vaccname=''
    this.disname=''
  }

  ngOnInit(): void {
    this.vacc.orgId=this.auth.currentorg.orgId
    this.auth.getVaccineByOrgId(this.vacc.orgId).subscribe((dbVaccine :Vaccine[])=>{
      this.auth.vaccines=dbVaccine
    })
  }

  vaccName(name){
    this.vaccname=name
    for(let i=0;i<this.auth.vaccines.length;i++){
      if(this.auth.vaccines[i].name===name){
        this.disname=this.auth.vaccines[i].disease
        this.vacc=this.auth.vaccines[i]
        break
      }
    }
  }
  editVacc(vaccEditForm){
    this.errorFlag=false
    this.successFlag=false
    this.auth.vaccUpdate(this.vacc).subscribe((res: any) => {
      if (res === null) {
        this.errorFlag = true
      }
      else {
        this.successFlag = true
      }
    })
    vaccEditForm.form.markAsPristine()
  }
}
