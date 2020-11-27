import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Organization } from '../model/Organization';

@Component({
  selector: 'app-org-edit-profile',
  templateUrl: './org-edit-profile.component.html',
  styleUrls: ['./org-edit-profile.component.css'],
})
export class OrgEditProfileComponent {
  errorFlag : boolean
  successFlag : boolean
  org : Organization
  constructor(public auth: AuthService) {
    this.org = this.auth.currentorg
   }

  ngOnInit(): void {
  }
  orgSubmit(orgEditForm){
    this.errorFlag = false
    this.successFlag = false
    this.auth.orgUpdate(this.org).subscribe((res: any) => {
      if (res === null) {
        this.errorFlag = true
      }
      else {
        this.successFlag = true
        this.auth.currentorg = res
        this.org = this.auth.currentorg
      }
      console.log(res)
    })
    orgEditForm.form.markAsPristine()
  }
}
