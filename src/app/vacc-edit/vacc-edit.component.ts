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
  disease:string
  name:string

  constructor(public auth:AuthService) { 
    this.vacc= new Vaccine()
    this.disease=''
    this.name=''
  }

  ngOnInit(): void {
    this.vacc.orgId=this.auth.currentorg.orgId
    this.auth.getVaccineByOrgId(this.vacc.orgId).subscribe((dbVaccine :Vaccine[])=>{
      this.auth.vaccines=dbVaccine
      console.log(this.auth.vaccines)
    })

  }

}
