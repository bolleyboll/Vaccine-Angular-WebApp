import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgEndTrialComponent } from './org-end-trial.component';

describe('OrgEndTrialComponent', () => {
  let component: OrgEndTrialComponent;
  let fixture: ComponentFixture<OrgEndTrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgEndTrialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgEndTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
