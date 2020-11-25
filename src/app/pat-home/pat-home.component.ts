import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-pat-home',
  templateUrl: './pat-home.component.html',
  styleUrls: ['./pat-home.component.css']
})
export class PatHomeComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
