import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Vaccine } from '../model/Vaccine';

@Component({
  selector: 'app-org-start-trial',
  templateUrl: './org-start-trial.component.html',
  styleUrls: ['./org-start-trial.component.css']
})
export class OrgStartTrialComponent implements OnInit {

  vacc :Vaccine

  constructor( public auth: AuthService) {
    this.vacc=new Vaccine()
   }

  ngOnInit(): void {
    this.vacc.orgId=this.auth.currentorg.orgId
    this.auth.getVaccineByOrgId(this.vacc.orgId).subscribe((dbVaccine :Vaccine[])=>{
      this.auth.vaccines=dbVaccine
      console.log(this.auth.vaccines)
    })
  }

}
