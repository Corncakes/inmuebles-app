import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProcesosComponent } from './list-procesos.component';

describe('ListProcesosComponent', () => {
  let component: ListProcesosComponent;
  let fixture: ComponentFixture<ListProcesosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProcesosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProcesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
