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
  vaccid: number
  vacname: String
  orgid: number
  reports: Report[]
  patients: Patient[]
  errorFlag: boolean
  constructor(public auth: AuthService) {
    this.vaccine = new Vaccine()
    this.vacname = ''
    this.errorFlag = false
    this.reports = []
    this.patients = []
  }

  ngOnInit(): void {
    this.orgid = this.auth.currentorg.orgId
    this.auth.getVaccineByOrgId(this.orgid).subscribe((dbVaccine: Vaccine[]) => {
      this.auth.vaccines = dbVaccine
    })
  }
  /*
   this.auth.getResult(this.patient.patientId).subscribe((dbReport: Report[]) => {
     console.log(dbReport)
     dbReport.forEach((res: Report) => {
       if (res.result === "Under Trial") {
         this.patientlist.push(res.patientId)
       }
     });*/

  /*this.patientlist.forEach(_patientId => {
    this.auth.getPatient(this.patient.patientId).subscribe((dbPatient: Patient) => {
      this.patients.push(dbPatient)
    })
  });
})
}*/

  /* patName(name) {
     this.patname = name
     for (let i = 0; i < this.patients.length; i++) {
       if (this.patients[i].name === name) {
         this.disname = this.patients[i].disease
         this.gender = this.patients[i].gender
         this.patient = this.patients[i]
         break
       }
     }
   }*/
  vaccName(name) {
    this.patients=[]
    this.vacname = name
    this.auth.vaccines.forEach(vacc => {
      if (name === vacc.name) {
        this.vaccid =vacc.vaccId
      }
    });/*
    for (let i = 0; i < this.auth.vaccines.length; i++) {
      if (name === this.auth.vaccines[i].name) {
        this.vaccid = this.auth.vaccines[i].vaccId
        break
      }
    }*/
    console.log(this.patients)
    this.auth.getVacReport(this.vaccid).subscribe((res: Report[]) => {
      if (res.length == 0) {
        this.errorFlag = true
        this.patients=[]
      }
      else {
        res.forEach(result => {
          if(result.result==="Under Trial"){
            this.reports.push(result)
          }
        });/*
        for (let i = 0; i < res.length; i++) {
          if (res[i].result === "Under Trial") {
            this.reports.push(res[i]) 
          }
        }
        console.log(this.patients)

        for(let j=0;j<this.reports.length;j++){
          this.auth.getPatient(this.reports[j].patientId).subscribe((res:Patient) =>{
            this.patients[j]=res
          })
        }*/
        console.log(this.patients)
      }
    })
  }
  patName(name) {
    
  }
}
