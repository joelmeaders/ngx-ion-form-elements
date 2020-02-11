import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputFieldComponent } from './input-field/input-field.component';
import { ValidationErrorComponent } from './validation-error/validation-error.component';



@NgModule({
  declarations: [
    InputFieldComponent,
    ValidationErrorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule.forRoot()
  ],
  exports: [
    InputFieldComponent,
    ValidationErrorComponent
  ]
})
export class NgxIonFormElementsModule { }
