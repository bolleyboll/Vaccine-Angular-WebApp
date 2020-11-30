import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Patient } from '../model/Patient';
import { Vaccine } from '../model/Vaccine';

@Component({
  selector: 'app-org-vacc',
  templateUrl: './org-vacc.component.html',
  styleUrls: ['./org-vacc.component.css'],
})
export class OrgVaccComponent implements OnInit {
  vacc: Vaccine;
  patients: Patient[];
  patname: String[];
  id: number;
  patListStyle: string

  constructor(public auth: AuthService) {
    this.vacc = new Vaccine();
    this.patients = [];
    this.patname = [];
  }

  ngOnInit(): void {
    this.vacc.orgId = this.auth.currentorg.orgId;
    this.auth
      .getVaccineByOrgId(this.vacc.orgId)
      .subscribe((dbVaccine: Vaccine[]) => {
        this.auth.vaccines = dbVaccine;
        // console.log(this.auth.vaccines);
      });
  }

  patName(vaccId: number) {
    this.id = vaccId;
    this.patname = [];
    this.auth
      .getPatientByOrgId(this.auth.currentorg.orgId)
      .subscribe((dbPatient: Patient[]) => {
        this.patients = dbPatient;
        this.patients.forEach((element) => {
          if (vaccId == element.vaccId) {
            this.patname.push(element.name);
          }
        });
      });
    // console.log(this.patname);
  }
}
