import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Patient } from '../model/Patient';

@Component({
  selector: 'app-edit-profile-pat',
  templateUrl: './edit-profile-pat.component.html',
  styleUrls: ['./edit-profile-pat.component.css']
})
export class EditProfilePatComponent implements OnInit {

  errorFlag : boolean
  successFlag : boolean
  pat : Patient
  constructor(public auth: AuthService) {
    this.pat = new Patient()
    this.successFlag = false
    this.errorFlag = false
   }

  ngOnInit(): void {
  }
  patientSubmit(patEditForm){

  }
}
