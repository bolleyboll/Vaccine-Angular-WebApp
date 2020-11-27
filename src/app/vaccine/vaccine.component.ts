import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Organization } from '../model/Organization';
import { Vaccine } from '../model/Vaccine';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.css']
})
export class VaccineComponent implements OnInit {
  orgName : String[]
  orgList: Organization[]
  constructor(public auth: AuthService) { 
    this.orgName = []
    this.orgList = []
  }

  ngOnInit(): void {
    this.auth.showVaccines().subscribe((data: Vaccine[]) => {
      this.auth.vaccines = data
      this.auth.showPartners().subscribe((data: Organization[]) => {
        this.orgList = data
        this.auth.vaccines.forEach(vaccine => {
        this.orgList.forEach(org => {
          if(vaccine.orgId == org.orgId){
            this.orgName.push(org.name)
          }
        });
      });
      })
    })
  }

}
