import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-pat-home',
  templateUrl: './pat-home.component.html',
  styleUrls: ['./pat-home.component.css']
})
export class PatHomeComponent implements OnInit {

  trial:boolean
  constructor(public auth: AuthService) { 
  }

  ngOnInit(): void {
    if(this.auth.currentuser.orgId===null)
    {
      this.trial = false
    }
    else{
      /*this.auth.getOrg(this.auth.currentuser.orgId).subscribe((res: any) => {
        console.log(res)
      })*/
      this.trial = true
    }
  }

}
