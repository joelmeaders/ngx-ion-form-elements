import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { DateFieldComponent } from './date-field.component';
describe('DateFieldComponent', () => {
  let component: DateFieldComponent;
  let fixture: ComponentFixture<DateFieldComponent>;
  beforeEach(() => {
    const changeDetectorRefStub = { detectChanges: () => ({}) };
    const popoverControllerStub = {
      create: object => ({
        present: () => ({}),
        onDidDismiss: () => ({ then: () => ({}) })
      })
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DateFieldComponent],
      providers: [
        { provide: ChangeDetectorRef, useValue: changeDetectorRefStub },
        { provide: PopoverController, useValue: popoverControllerStub }
      ]
    });
    fixture = TestBed.createComponent(DateFieldComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
