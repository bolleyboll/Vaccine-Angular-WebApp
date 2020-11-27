import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Report } from '../model/Report';

@Component({
  selector: 'app-patient-report',
  templateUrl: './patient-report.component.html',
  styleUrls: ['./patient-report.component.css']
})
export class PatientReportComponent implements OnInit {
  orgname: String
  vacname: String
  report : Report
  style: String

  constructor(public auth: AuthService) { 
    this.report = new Report()
  }

  ngOnInit(): void {
    this.auth.getOrg(this.auth.currentuser.orgId).subscribe((res: any) => {
      this.orgname = res.name
    })
    this.auth.getVacc(this.auth.currentuser.vaccId).subscribe((res: any) => {
      this.vacname = res.name
    })
    this.auth.getResult(this.auth.currentuser.patientId).subscribe((dbReport: Report[]) => {
      this.auth.reports = dbReport
    })
  }

}
