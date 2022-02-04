import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDesignacionesComponent } from './add-designaciones.component';

describe('AddDesignacionesComponent', () => {
  let component: AddDesignacionesComponent;
  let fixture: ComponentFixture<AddDesignacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDesignacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDesignacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
