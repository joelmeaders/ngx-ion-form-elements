import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { BaseControl } from '../base-control';

@Component({
  selector: 'ife-textarea-field',
  templateUrl: './textarea-field.component.html',
  styleUrls: ['./textarea-field.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaFieldComponent extends BaseControl {
  @Input() public rows: string;
  @Input() public controlValidationMessages: any;
}
