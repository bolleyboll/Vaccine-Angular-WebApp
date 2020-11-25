import { Component, OnInit } from '@angular/core';
import { Vaccine } from '../model/Vaccine';

@Component({
  selector: 'app-vacc-edit',
  templateUrl: './vacc-edit.component.html',
  styleUrls: ['./vacc-edit.component.css']
})
export class VaccEditComponent implements OnInit {

  vacc:Vaccine

  constructor() { 
    this.vacc= new Vaccine()
  }

  ngOnInit(): void {
  }

}
