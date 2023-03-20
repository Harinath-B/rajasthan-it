import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatRegComponent } from './pat-reg.component';

describe('PatRegComponent', () => {
  let component: PatRegComponent;
  let fixture: ComponentFixture<PatRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
