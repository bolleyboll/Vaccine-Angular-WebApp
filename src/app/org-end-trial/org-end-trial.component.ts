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
  vaccName(name) {
    this.patients=[]
    this.vacname = name
    this.auth.vaccines.forEach(vacc => {
      if (name === vacc.name) {
        this.vaccid =vacc.vaccId
      }
    });
    console.log(this.patients)
    this.auth.getVacReport(this.vaccid).subscribe((res: Report[]) => {
      if (res.length == 0) {
        this.errorFlag = true
        this.patients=[]
      }
      else {
        res.forEach((result) => {
          if(result.result==="Under Trial"){
            this.reports.push(result)
            this.auth.getPatient(result.patientId).subscribe((pat: Patient) =>{
              this.patients.push(pat)
            })
          }
        });
        console.log(this.patients)
      }
    })
  }
  patName(name) {
    
  }
}
