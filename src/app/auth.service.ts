import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from './model/login';
import { Organization } from './model/Organization';
import { Patient } from './model/Patient';
import { Vaccine } from './model/Vaccine';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'someToken'
  }),
  withCredentials: true
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public partners: Organization[]
  public vaccines: Vaccine[]
  currentuser: Patient
  currentorg: Organization
  vaccs:Vaccine[]
  constructor(public http: HttpClient) {
    this.partners = []
    this.vaccines = []
  }

  signInOrg(login) {
    return this.http.post("http://localhost:8080/org/signin", login, httpOptions)
  }
  signInPat(login) {
    return this.http.post("http://localhost:8080/patient/signin", login, httpOptions)
  }
  patRegister(pat) {
    return this.http.post("http://localhost:8080/patient/signup", pat)
  }
  orgRegister(org) {
    return this.http.post("http://localhost:8080/org/signup", org)
  }
  patUpdate(pat) {
    return this.http.put("http://localhost:8080/patient/update", pat, httpOptions)
  }
  showPartners() {
    return this.http.get("http://localhost:8080/partners")
  }
  showVaccines() {
    return this.http.get("http://localhost:8080/vaccines")
  }
  showReports() {
    return this.http.get("http://localhost:8080/reports")
  }
  showVaccinesOrgName() {
    return this.http.get("http://localhost:8080/partners")
  }
  getOrg(id) {
    return this.http.get("http://localhost:8080/org/profile/" + id)
  }
  addVaccine(vaccine: Vaccine) {
    return this.http.post("http://localhost:8080/vaccine/add", vaccine, httpOptions)
  }
  getResult(id){
    return this.http.get("http://localhost:8080/patient/"+id+"/report" + id, httpOptions)
  }
  getVacc(id){
    return this.http.get("http://localhost:8080/vaccines/id/"+id)
  }
  getVaccineByOrgId(id){
    return this.http.get("http://localhost:8080/org/"+id+"/vaccines",httpOptions)
  }
}
