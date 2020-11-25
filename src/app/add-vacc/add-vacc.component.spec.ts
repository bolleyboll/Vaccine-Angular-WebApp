import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVaccComponent } from './add-vacc.component';

describe('AddVaccComponent', () => {
  let component: AddVaccComponent;
  let fixture: ComponentFixture<AddVaccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVaccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
