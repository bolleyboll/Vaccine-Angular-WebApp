import { Component, OnInit } from '@angular/core';
import { Login } from '../model/login';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  login : Login
  constructor() {
    this.login= new Login()
   }

  ngOnInit(): void {
  }
  loginSubmit(loginForm){
    console.log(this.login)
  }

}
