import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Patient } from '../model/Patient';
import { Report } from '../model/Report';
import { Vaccine } from '../model/Vaccine';

@Component({
  selector: 'app-org-start-trial',
  templateUrl: './org-start-trial.component.html',
  styleUrls: ['./org-start-trial.component.css']
})
export class OrgStartTrialComponent implements OnInit {

  vacc :Vaccine
  pat:Patient
  vacname:string
  patients:Patient[]
  resultPat :Patient
  resultRep:Report
  patname:string
  vaccid :number
  successFlag:boolean

  constructor( public auth: AuthService) {
    this.vacc=new Vaccine()
    this.pat= new Patient()
    this.resultPat=new Patient()
    this.resultRep= new Report()
    this.patname=''
    this.vacname=''
   }

  ngOnInit(): void {
    this.vacc.orgId=this.auth.currentorg.orgId
    this.resultPat.orgId=this.auth.currentorg.orgId
    this.resultRep.orgId=this.auth.currentorg.orgId
    this.resultRep.result="Under Trial"
    this.auth.getVaccineByOrgId(this.vacc.orgId).subscribe((dbVaccine :Vaccine[])=>{
      this.auth.vaccines=dbVaccine
    })
  }

  patName(pats){

    this.patname=pats
    for(let i=0;i<this.patients.length;i++){
      if(pats===this.patients[i].name){
        this.resultPat=this.patients[i]
        break
      }
    }
    this.resultPat.orgId=this.auth.currentorg.orgId
    this.resultPat.vaccId=this.vaccid
  }

  vaccName(name){
    this.vacname=name
    this.auth.vaccines.forEach(v => {
      if(this.vacname===v.name){
        this.vaccid=v.vaccId
        this.resultRep.vaccId=v.vaccId
        this.vacc.disease=v.disease
        this.auth.getPatientsByDisease(this.vacc.disease).subscribe((data:Patient[])=>{
          this.patients=data
        })
      }   
    });
  }
  startTrial(){
    this.auth.patUpdate(this.resultPat).subscribe((res:any)=>{
      console.log(res)
    })
    this.auth.addReport(this.resultRep).subscribe((data:any)=>{
      console.log(data)
    })

  }

}
