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
    this.pat = auth.currentuser
   }

  ngOnInit(): void {
  }
  patientSubmit(patEditForm){
    this.errorFlag = false
    this.successFlag = false
    this.auth.patUpdate(this.pat).subscribe((res: any) => {
     /* if (res === null) {
        this.errorFlag = true
      }
      else {
        this.successFlag = true
        this.auth.currentuser = res
      }*/
      console.log(res)
    })
    this.pat = this.auth.currentuser
    patEditForm.form.markAsPristine()
  }
}
