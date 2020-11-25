import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-org-home',
  templateUrl: './org-home.component.html',
  styleUrls: ['./org-home.component.css'],
})
export class OrgHomeComponent {
  constructor(public auth : AuthService) {}
}
