import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Login } from '../model/login';

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.css'],
})
export class DeletePatientComponent implements OnInit {
  del: Login;
  errorFlag: boolean;
  successFlag: boolean;
  constructor(public auth: AuthService, public router: Router) {
    this.del = new Login();
  }
  ngOnInit(): void {}
  deleteSubmit(deleteForm) {
    this.errorFlag = false;
    this.successFlag = false;
    if (
      this.del.email === this.auth.currentuser.email &&
      this.del.password === this.auth.currentuser.password
    ) {
      this.successFlag = true;
    } else {
      this.errorFlag = true;
    }
    this.del = new Login();
    deleteForm.form.markAsPristine();
  }
}
