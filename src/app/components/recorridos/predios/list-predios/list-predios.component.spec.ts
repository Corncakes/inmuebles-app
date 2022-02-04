import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrediosComponent } from './list-predios.component';

describe('ListPrediosComponent', () => {
  let component: ListPrediosComponent;
  let fixture: ComponentFixture<ListPrediosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPrediosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPrediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
