import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './model/login';
import { Organization } from './model/Organization';
import { Patient } from './model/Patient';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentuser : Patient
  orgdata: Organization
  constructor(public http: HttpClient) { }

  signInOrg(login) {
    return (this.http.post("http://localhost:8080/org/signin", login))
  }
  signInPat(login) {
    return (this.http.post("http://localhost:8080/pat/signin", login))
  }
  patRegister(pat) {
    return (this.http.post("http://localhost:8080/pat/signup", pat))
  }
  orgRegister(org) {
    return (this.http.post("http://localhost:8080/org/signup",org))
  }
}
