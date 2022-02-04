import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVisitasComponent } from './add-visitas.component';

describe('AddVisitasComponent', () => {
  let component: AddVisitasComponent;
  let fixture: ComponentFixture<AddVisitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVisitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVisitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
