import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocRegComponent } from './doc-reg.component';

describe('DocRegComponent', () => {
  let component: DocRegComponent;
  let fixture: ComponentFixture<DocRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
