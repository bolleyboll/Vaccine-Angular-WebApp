import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Login } from '../model/login';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  login: Login;
  constructor(public auth: AuthService) {
    this.login = new Login();
  }

  ngOnInit(): void {}
  loginSubmit(loginForm) {
    this.auth.signIn(this.login);
  }
}
