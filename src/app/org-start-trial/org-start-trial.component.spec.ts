import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgStartTrialComponent } from './org-start-trial.component';

describe('OrgStartTrialComponent', () => {
  let component: OrgStartTrialComponent;
  let fixture: ComponentFixture<OrgStartTrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgStartTrialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgStartTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
