import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-patient-report',
  templateUrl: './patient-report.component.html',
  styleUrls: ['./patient-report.component.css']
})
export class PatientReportComponent implements OnInit {
  orgname: String
  result : String
  description : String
  style: String

  constructor(public auth: AuthService) { 
    this.result = ''
  }

  ngOnInit(): void {
    this.auth.getOrg(this.auth.currentuser.orgId).subscribe((res: any) => {
      this.orgname = res.name
    })
    this.auth.getResult(this.auth.currentuser.patientId).subscribe((res: any[]) => {
      this.result = res[0].result
    })
    this.auth.getResult(this.auth.currentuser.patientId).subscribe((res: any[]) => {
      this.description = res[0].description
    })
  }

}
