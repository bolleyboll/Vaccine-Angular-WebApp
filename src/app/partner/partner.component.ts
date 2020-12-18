import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Organization } from '../model/Organization';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css'],
})
export class PartnerComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.showPartners().subscribe((data: Organization[]) => {
      this.auth.partners = data;
    });
  }
}
