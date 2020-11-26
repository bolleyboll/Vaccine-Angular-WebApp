import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Report } from '../model/Report';
import { Vaccine } from '../model/Vaccine';
import { Organization } from '../model/Organization'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  reports: Report[]

  constructor(public auth: AuthService) {
    this.reports = []
   }

  ngOnInit(): void {
    this.auth.showReports().subscribe((data: Report[]) => {
      this.reports = data
    })
    this.auth.showPartners().subscribe((data: Organization[]) => {
      this.auth.partners = data;
    })
    this.auth.showVaccines().subscribe((data: Vaccine[]) => {
      this.auth.vaccines = data;
    })
  }

}
