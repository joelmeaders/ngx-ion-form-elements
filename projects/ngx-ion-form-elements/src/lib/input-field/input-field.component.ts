import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

import { BaseControl } from '../base-control';

@Component({
  selector: 'ife-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputFieldComponent extends BaseControl {
  @Input() public icon: string;
  @Input() public type =
    'text' ||
    'date' ||
    'email' ||
    'number' ||
    'password' ||
    'search' ||
    'tel' ||
    'time' ||
    'url';
  @Input() public min: number = undefined;
  @Input() public max: number = undefined;
  @Input() public itemColor = 'light';
}
