import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseControl } from '../base-control';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'ife-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordFieldComponent extends BaseControl {
  @Input() public icon: string;
  @Input() public min: number = undefined;
  @Input() public max: number = undefined;
  @Input() public rows: string;
  @Input() public eyeColor = 'primary';

  public type = 'password';
  public showPassword = false;
}
