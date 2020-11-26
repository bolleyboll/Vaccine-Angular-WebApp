import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-pat-home',
  templateUrl: './pat-home.component.html',
  styleUrls: ['./pat-home.component.css']
})
export class PatHomeComponent implements OnInit {

  trial:boolean
  endtrial: boolean
  orgname: String
  vaccname : String
  result : String
  starttrial:boolean
  enroll : boolean
  constructor(public auth: AuthService) { 
    this.endtrial= false
    this.orgname = ''
    this.vaccname=''
    this.result=''
    this.starttrial=false
    this.enroll = false
  }

  ngOnInit(): void {
    if(this.auth.currentuser.orgId===null)
    {
      this.trial = false
    }
    else{
      this.auth.getOrg(this.auth.currentuser.orgId).subscribe((res: any) => {
        this.orgname = res.name
      })
      this.auth.getVacc(this.auth.currentuser.vaccId).subscribe((res: any) => {
        this.vaccname = res.name
      })
      this.auth.getResult(this.auth.currentuser.patientId).subscribe((res: any) => {
        this.result = res.result
      })
      this.trial = true
    }
  }
  endTrial(){
    this.endtrial = true
  }
  startTrial(){
    this.starttrial = true
  }
  trialEnroll(){
    this.enroll = true
    this.starttrial = false
  }

}
