import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccEditComponent } from './vacc-edit.component';

describe('VaccEditComponent', () => {
  let component: VaccEditComponent;
  let fixture: ComponentFixture<VaccEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
