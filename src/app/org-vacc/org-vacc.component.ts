import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Vaccine } from '../model/Vaccine';

@Component({
  selector: 'app-org-vacc',
  templateUrl: './org-vacc.component.html',
  styleUrls: ['./org-vacc.component.css']
})
export class OrgVaccComponent implements OnInit {
  vacc:Vaccine

  constructor(public auth:AuthService) {
    this.vacc= new Vaccine()
   }

  ngOnInit(): void {
    this.vacc.orgId=this.auth.currentorg.orgId
    this.auth.getVaccineByOrgId(this.vacc.orgId).subscribe((dbVaccine :Vaccine[])=>{
      this.auth.vaccines=dbVaccine
    })
  }

}
