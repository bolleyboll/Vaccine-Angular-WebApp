import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Organization } from '../model/Organization';
import { Report } from '../model/Report';
import { Vaccine } from '../model/Vaccine';

@Component({
  selector: 'app-patient-report',
  templateUrl: './patient-report.component.html',
  styleUrls: ['./patient-report.component.css'],
})
export class PatientReportComponent implements OnInit {
  report: Report;
  num: String;
  errorFlag: boolean;
  patid: number;
  orgid: number;
  vaccid: number;
  orgdetail: Organization;
  vaccdetail: Vaccine;
  successFlag: boolean;
  textcolor: String;

  constructor(public auth: AuthService) {
    this.report = new Report();
    this.orgdetail = new Organization();
    this.vaccdetail = new Vaccine();
    this.num = '';
    this.errorFlag = false;
    this.successFlag = false;
  }

  ngOnInit(): void {
    this.auth
      .getResult(this.auth.currentuser.patientId)
      .subscribe((dbReport: Report[]) => {
        if (dbReport.length != 0) {
          this.auth.reports = dbReport;
        } else {
          this.errorFlag = true;
        }
      });
  }
  setId(id) {
    this.successFlag = true;
    this.num = id;
    this.patid = this.auth.reports[id - 1].patientId;
    this.orgid = this.auth.reports[id - 1].orgId;
    this.vaccid = this.auth.reports[id - 1].vaccId;
    this.report.result = this.auth.reports[id - 1].result;
    this.report.description = this.auth.reports[id - 1].description;
    if (this.report.result === 'Pass') {
      this.textcolor = 'text-success';
    } else if (this.report.result === 'Fail') {
      this.textcolor = 'text-danger';
    } else {
      this.textcolor = 'text-info';
    }
    this.auth.getOrg(this.orgid).subscribe((res: any) => {
      this.orgdetail = res;
    });
    this.auth.getVacc(this.vaccid).subscribe((res: any) => {
      this.vaccdetail = res;
    });
  }
}
