import { Component, OnInit } from '@angular/core';
import { Vaccine } from '../model/Vaccine';

@Component({
  selector: 'app-add-vacc',
  templateUrl: './add-vacc.component.html',
  styleUrls: ['./add-vacc.component.css']
})
export class AddVaccComponent implements OnInit {

  vacc:Vaccine

  constructor() { 

    this.vacc= new Vaccine()
  }

  ngOnInit(): void {
  }

}
