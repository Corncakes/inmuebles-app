import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserTypesComponent } from './add-user-types.component';

describe('AddUserTypesComponent', () => {
  let component: AddUserTypesComponent;
  let fixture: ComponentFixture<AddUserTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
