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
  orgName : Organization

  constructor(public auth: AuthService) { 
    this.orgName = new Organization
  }

  ngOnInit(): void {
    this.auth.showVaccines().subscribe((data: Vaccine[]) => {
      this.auth.vaccines = data
    })
  }

}
