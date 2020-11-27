import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Patient } from '../model/Patient';
import { Report } from '../model/Report';
import { Vaccine } from '../model/Vaccine';

@Component({
  selector: 'app-org-end-trial',
  templateUrl: './org-end-trial.component.html',
  styleUrls: ['./org-end-trial.component.css']
})
export class OrgEndTrialComponent implements OnInit {
  vaccine : Vaccine
  patient : Patient
  patientlist : number[]
  patients : Patient[]

  constructor(public auth: AuthService) {
    this.vaccine=new Vaccine()
    this.patient=new Patient()
    this.patientlist = []
   }

  ngOnInit(): void {
    this.vaccine.orgId=this.auth.currentorg.orgId
    this.auth.getVaccineByOrgId(this.vaccine.orgId).subscribe((dbVaccine :Vaccine[])=>{
      this.auth.vaccines=dbVaccine

      this.auth.getResult(this.patient.patientId).subscribe((dbReport: Report[]) => {
        dbReport.forEach((element : Report) => {
          if(element.result === "Under Trial")
          {
            this.patientlist.push(element.patientId)
          }
        });
        
        this.patientlist.forEach(patientId => {
          this.auth.getPatient(this.patient.patientId).subscribe((dbPatient :Patient)=>{
            this.patients.push(dbPatient)
        });
      })
    })
  }
}

}
