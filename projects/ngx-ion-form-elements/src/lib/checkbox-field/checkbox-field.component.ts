import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'ife-checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxFieldComponent {
  @Input() public name: string;
  @Input() public value: string;
  @Input() public caption: string;
  @Input() public cssClass: string;
  @Input() public controlValidationMessages: any;
  @Input() public control: any;

  constructor() { }

}
