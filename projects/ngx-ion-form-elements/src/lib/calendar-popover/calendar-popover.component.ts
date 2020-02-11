import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MatCalendar } from '@angular/material/datepicker';

@Component({
  selector: 'ife-calendar-popover',
  templateUrl: './calendar-popover.component.html',
  styleUrls: ['./calendar-popover.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarPopoverComponent {

  @ViewChild('calendar', { static: true }) public calendar: MatCalendar<any>;

  public readonly startAt = (date = new Date()) => new Date(date.setFullYear(date.getFullYear() - 36));

  constructor(private readonly popoverController: PopoverController) { }

  public dateSelected(event: any) {
    this.popoverController.dismiss(event);
  }

}
