import { Component, OnInit } from '@angular/core';
import { Organization } from '../model/Organization';

@Component({
  selector: 'app-org-delete',
  templateUrl: './org-delete.component.html',
  styleUrls: ['./org-delete.component.css']
})
export class OrgDeleteComponent implements OnInit {

  org:Organization

  constructor() {

    this.org = new Organization()
   }

  ngOnInit(): void {
  }

}
