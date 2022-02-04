import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProcesosComponent } from './add-procesos.component';

describe('AddProcesosComponent', () => {
  let component: AddProcesosComponent;
  let fixture: ComponentFixture<AddProcesosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProcesosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProcesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
