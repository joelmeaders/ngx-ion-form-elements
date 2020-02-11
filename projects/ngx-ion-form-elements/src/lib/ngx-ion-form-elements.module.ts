import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { InputFieldComponent } from './input-field/input-field.component';
import { ValidationErrorComponent } from './validation-error/validation-error.component';
import { DateFieldComponent } from './date-field/date-field.component';
import { CalendarPopoverComponent } from './calendar-popover/calendar-popover.component';
import { CheckboxFieldComponent } from './checkbox-field/checkbox-field.component';
import { DropdownFieldComponent } from './dropdown-field/dropdown-field.component';
import { PasswordFieldComponent } from './password-field/password-field.component';
import { TextareaFieldComponent } from './textarea-field/textarea-field.component';
import { ToggleFieldComponent } from './toggle-field/toggle-field.component';



@NgModule({
  declarations: [
    CalendarPopoverComponent,
    CheckboxFieldComponent,
    DateFieldComponent,
    DropdownFieldComponent,
    InputFieldComponent,
    PasswordFieldComponent,
    TextareaFieldComponent,
    ToggleFieldComponent,
    ValidationErrorComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    CalendarPopoverComponent,
    CheckboxFieldComponent,
    DateFieldComponent,
    DropdownFieldComponent,
    InputFieldComponent,
    PasswordFieldComponent,
    TextareaFieldComponent,
    ToggleFieldComponent,
    ValidationErrorComponent,
  ],
  entryComponents: [
    CalendarPopoverComponent
  ]
})
export class NgxIonFormElementsModule { }
