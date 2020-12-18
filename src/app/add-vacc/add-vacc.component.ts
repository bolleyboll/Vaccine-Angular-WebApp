import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Vaccine } from '../model/Vaccine';

@Component({
  selector: 'app-add-vacc',
  templateUrl: './add-vacc.component.html',
  styleUrls: ['./add-vacc.component.css'],
})
export class AddVaccComponent implements OnInit {
  vacc: Vaccine;
  errorFlag: boolean;
  successFlag: boolean;

  constructor(public auth: AuthService) {
    this.vacc = new Vaccine();
  }

  ngOnInit(): void {}
  addVaccine(vaccAddForm) {
    this.errorFlag = false;
    this.successFlag = false;
    this.vacc.orgId = this.auth.currentorg.orgId;
    this.auth.addVaccine(this.vacc).subscribe((res: any) => {
      if (res == null) {
        this.errorFlag = true;
      } else {
        this.successFlag = true;
      }
    });
    this.vacc = new Vaccine();
    vaccAddForm.form.markAsPristine();
  }
}
