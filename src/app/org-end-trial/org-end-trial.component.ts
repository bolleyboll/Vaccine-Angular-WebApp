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
  vaccine: Vaccine
  patient: Patient
  repo: Report
  patname:String
  disname:String
  gender:String
  patientlist: number[]
  patients: Patient[]
  

  constructor(public auth: AuthService) {
    this.vaccine = new Vaccine()
    this.patient = new Patient()
    this.repo = new Report()
    this.patientlist = []
    this.patients = []
    this.patname = ''
    this.disname = ''
    this.gender = ''
  }

  ngOnInit(): void {
    this.vaccine.orgId = this.auth.currentorg.orgId
    this.auth.getVaccineByOrgId(this.vaccine.orgId).subscribe((dbVaccine: Vaccine[]) => {
      this.auth.vaccines = dbVaccine
    })
    
    console.log(this.patient.patientId)
    this.auth.getResult(this.patient.patientId).subscribe((dbReport: Report[]) => {
      console.log(dbReport)
      dbReport.forEach((res: Report) => {
        if (res.result === "Under Trial") {
          this.patientlist.push(res.patientId)
        }
      });

      this.patientlist.forEach(_patientId => {
        this.auth.getPatient(this.patient.patientId).subscribe((dbPatient: Patient) => {
          this.patients.push(dbPatient)
        })
      });
    })
  }

  patName(name){
    this.patname=name
    for(let i=0;i<this.patients.length;i++){
      if(this.patients[i].name===name){
        this.disname=this.patients[i].disease
        this.gender=this.patients[i].gender
        this.patient=this.patients[i]
        break
      }
    }
  }
}
