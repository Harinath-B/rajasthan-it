import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRoomComponent } from './patient-room.component';

describe('PatientRoomComponent', () => {
  let component: PatientRoomComponent;
  let fixture: ComponentFixture<PatientRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
