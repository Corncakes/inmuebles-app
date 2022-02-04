import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserTypesComponent } from './list-user-types.component';

describe('ListUserTypesComponent', () => {
  let component: ListUserTypesComponent;
  let fixture: ComponentFixture<ListUserTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUserTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
