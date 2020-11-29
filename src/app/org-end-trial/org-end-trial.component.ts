import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Patient } from '../model/Patient';
import { Report } from '../model/Report';
import { Vaccine } from '../model/Vaccine';

@Component({
  selector: 'app-org-end-trial',
  templateUrl: './org-end-trial.component.html',
  styleUrls: ['./org-end-trial.component.css']
})
export class OrgEndTrialComponent implements OnInit {
  vaccine: Vaccine
  vaccid: number
  vacname: String
  orgid: number
  reports: Report[]
  patients: Patient[]
  successFlag :boolean
  errorFlag: boolean
  patient: Patient
  report : Report
  resorg: number
  respat: number
  resvacc: number
  resrep: number
  successful:boolean
  unsuccessful:boolean
  constructor(public auth: AuthService) {
    this.vaccine = new Vaccine()
    this.vacname = ''
    this.errorFlag = false
    this.reports = []
    this.patients = []
    this.successFlag = false
    this.patient=new Patient()
    this.report=new Report()
    this.successful=false
    this.unsuccessful=false
  }

  ngOnInit(): void {
    this.orgid = this.auth.currentorg.orgId
    this.auth.getVaccineByOrgId(this.orgid).subscribe((dbVaccine: Vaccine[]) => {
      this.auth.vaccines = dbVaccine
    })
  }
  vaccName(name) {
    this.errorFlag=false
    this.patients=[]
    this.vacname = name
    this.auth.vaccines.forEach(vacc => {
      if (name === vacc.name) {
        this.vaccid =vacc.vaccId
      }
    });
    this.auth.getVacReport(this.vaccid).subscribe((res: Report[]) => {
      if (res.length == 0) {
        this.errorFlag = true
        this.patients=[]
      }
      else {
        res.forEach((result) => {
          if(result.result==="Under Trial"){
            this.reports.push(result)
            this.auth.getPatient(result.patientId).subscribe((pat: Patient) =>{
              this.patients.push(pat)
            })
          }
          else{
            this.errorFlag=true
            this.patients=[]
          }
        });
      }
    })
  }
  patName(name) {
    for(let i=0;i<this.patients.length;i++){
      if(this.patients[i].name===name){
        this.patient=this.patients[i]
        this.respat=this.patients[i].patientId
        this.resorg=this.patients[i].orgId
        this.resvacc=this.patients[i].vaccId
        break
      }
    }
    this.successFlag=true
  }

  endTrial(endtrialform){
    for(let i=0;i<this.reports.length;i++){
      if(this.reports[i].patientId==this.respat){
          this.resrep=this.reports[i].reportId
          break
        }
      }
    this.report.reportId=this.resrep
    this.report.orgId=this.resorg
    this.report.patientId=this.respat
    this.report.vaccId=this.resvacc
    this.auth.updateReport(this.report).subscribe(res =>{
      if(res==null){
        this.unsuccessful=true
      }
      else{
        this.successful=true
      }
    })
  }
}
