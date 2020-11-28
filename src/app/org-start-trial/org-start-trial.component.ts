import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Patient } from '../model/Patient';
import { Vaccine } from '../model/Vaccine';

@Component({
  selector: 'app-org-start-trial',
  templateUrl: './org-start-trial.component.html',
  styleUrls: ['./org-start-trial.component.css']
})
export class OrgStartTrialComponent implements OnInit {

  vacc :Vaccine
  pat:Patient
  vacname:string
  patients:Patient[]

  constructor( public auth: AuthService) {
    this.vacc=new Vaccine()
    this.pat= new Patient()
    this.vacname=''
   }

  ngOnInit(): void {
    this.vacc.orgId=this.auth.currentorg.orgId
    this.auth.getVaccineByOrgId(this.vacc.orgId).subscribe((dbVaccine :Vaccine[])=>{
      this.auth.vaccines=dbVaccine
      console.log(this.auth.vaccines)
    })
  }

  vaccName(name){
    this.vacname=name
    this.auth.vaccines.forEach(v => {
      if(this.vacname===v.name){
        this.vacc.disease=v.disease
        this.auth.getPatientsByDisease(this.vacc.disease).subscribe((data:Patient[])=>{
          this.patients=data
        })
      }
      
    });

    
  }

}
