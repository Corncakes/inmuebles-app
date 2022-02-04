import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDesignacionesComponent } from './list-designaciones.component';

describe('ListDesignacionesComponent', () => {
  let component: ListDesignacionesComponent;
  let fixture: ComponentFixture<ListDesignacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDesignacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDesignacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
