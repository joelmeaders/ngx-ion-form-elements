import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxIonFormElementsComponent } from './ngx-ion-form-elements.component';

describe('NgxIonFormElementsComponent', () => {
  let component: NgxIonFormElementsComponent;
  let fixture: ComponentFixture<NgxIonFormElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxIonFormElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxIonFormElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
