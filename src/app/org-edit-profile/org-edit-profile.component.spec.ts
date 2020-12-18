import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgEditProfileComponent } from './org-edit-profile.component';

describe('OrgEditProfileComponent', () => {
  let component: OrgEditProfileComponent;
  let fixture: ComponentFixture<OrgEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrgEditProfileComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
