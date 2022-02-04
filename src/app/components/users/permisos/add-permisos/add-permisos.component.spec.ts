import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPermisosComponent } from './add-permisos.component';

describe('AddPermisosComponent', () => {
  let component: AddPermisosComponent;
  let fixture: ComponentFixture<AddPermisosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPermisosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
