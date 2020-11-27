import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Report } from '../model/Report';

@Component({
  selector: 'app-patient-report',
  templateUrl: './patient-report.component.html',
  styleUrls: ['./patient-report.component.css']
})
export class PatientReportComponent implements OnInit {
  report: Report
  num: String
  errorFlag: boolean
  patid:number
  orgid:number
  vaccid:number

  constructor(public auth: AuthService) {
    this.report = new Report()
    this.num = ''
  }

  ngOnInit(): void {
    this.auth.getResult(this.auth.currentuser.patientId).subscribe((dbReport: Report[]) => {
      if (dbReport.length != 0) {
        this.auth.reports = dbReport
      }
      else {
        this.errorFlag = true
      }
    })
  }
  setId(id) {
    this.num = id
    this.patid=this.auth.reports[id-1].patientId
    this.orgid=this.auth.reports[id-1].orgId
    this.vaccid=this.auth.reports[id-1].vaccId
    this.auth.getOrg(this.orgid).subscribe(res => console.log(res))
    this.auth.getVacc(this.vaccid).subscribe(res =>console.log(res))
  }
}
