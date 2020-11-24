import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './model/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  data : Login
  constructor(public http: HttpClient) {}

  signInOrg(login) {
      return(this.http.post("http://localhost:8080/org/signin", login))
  }
    signInPat(login){
      return(this.http.post("http://localhost:8080/pat/signin", login))
    }
  patRegister(){

  }
  orgRegister(){
    
  }
}
