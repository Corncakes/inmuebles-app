import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrediosComponent } from './add-predios.component';

describe('AddPrediosComponent', () => {
  let component: AddPrediosComponent;
  let fixture: ComponentFixture<AddPrediosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPrediosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
