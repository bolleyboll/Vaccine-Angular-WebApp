import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from './model/login';
import { Organization } from './model/Organization';
import { Patient } from './model/Patient';

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
  currentuser : Patient
  orgdata: Organization
  constructor(public http: HttpClient) { }

  signInOrg(login) {
    return (this.http.post("http://localhost:8080/org/signin", login, httpOptions))
  }
  signInPat(login) {
    return (this.http.post("http://localhost:8080/pat/signin", login, httpOptions))
  }
  patRegister(pat) {
    return (this.http.post("http://localhost:8080/pat/signup", pat, httpOptions))
  }
  orgRegister(org) {
    return (this.http.post("http://localhost:8080/org/signup",org, httpOptions))
  }
  patUpdate(pat){
    return (this.http.put("http://localhost:8080/pat/update",pat, httpOptions))
  }
  showPartners(){
    return (this.http.get("http://localhost:8080/partners"))
  showVaccines(){
    return (this.http.get("http://localhost:8080/vaccines"))
  }
}
