import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVinculacionesComponent } from './list-vinculaciones.component';

describe('ListVinculacionesComponent', () => {
  let component: ListVinculacionesComponent;
  let fixture: ComponentFixture<ListVinculacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVinculacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVinculacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
