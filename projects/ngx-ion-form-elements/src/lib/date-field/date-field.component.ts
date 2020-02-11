import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { CalendarPopoverComponent } from '../calendar-popover/calendar-popover.component';
import { BaseControl } from '../base-control';

@Component({
  selector: 'ife-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateFieldComponent extends BaseControl {
  constructor(private readonly popoverController: PopoverController, private readonly cd: ChangeDetectorRef) {
    super();
  }

  public async openCalendar(_event: any) {
    const popover = await this.popoverController.create({
      component: CalendarPopoverComponent,
      event: _event,
      translucent: true
    });

    popover.present();

    popover.onDidDismiss().then($event => {
      this.dateSelected($event.data);
    });
  }

  public dateSelected(value: any) {
    if (value) {
      this.value = value;
      this.cd.detectChanges();
    }
  }

  public nullDate(date: Date): boolean {
    if (date == null || date === new Date(undefined)) {
      return true;
    }
    return false;
  }
}
