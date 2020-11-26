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

  constructor(public auth:AuthService) { 
    this.vacc= new Vaccine()
  }

  ngOnInit(): void {
    this.vacc.orgId=this.auth.currentorg.orgId
    this.auth.getVaccineByOrgId(this.vacc.orgId).subscribe((dbVaccine :Vaccine[])=>{
      this.auth.vaccs=dbVaccine
    })

  }

}
