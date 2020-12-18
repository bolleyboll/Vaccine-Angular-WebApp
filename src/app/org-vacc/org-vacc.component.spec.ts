import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgVaccComponent } from './org-vacc.component';

describe('OrgVaccComponent', () => {
  let component: OrgVaccComponent;
  let fixture: ComponentFixture<OrgVaccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrgVaccComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgVaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
