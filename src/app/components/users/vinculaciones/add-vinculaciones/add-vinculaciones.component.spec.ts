import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVinculacionesComponent } from './add-vinculaciones.component';

describe('AddVinculacionesComponent', () => {
  let component: AddVinculacionesComponent;
  let fixture: ComponentFixture<AddVinculacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVinculacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVinculacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
