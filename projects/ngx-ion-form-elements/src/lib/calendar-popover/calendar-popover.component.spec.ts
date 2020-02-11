import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { CalendarPopoverComponent } from './calendar-popover.component';
describe('CalendarPopoverComponent', () => {
  let component: CalendarPopoverComponent;
  let fixture: ComponentFixture<CalendarPopoverComponent>;
  beforeEach(() => {
    const popoverControllerStub = { dismiss: event => ({}) };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CalendarPopoverComponent],
      providers: [
        { provide: PopoverController, useValue: popoverControllerStub }
      ]
    });
    fixture = TestBed.createComponent(CalendarPopoverComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
