import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'ife-validation-error',
  templateUrl: './validation-error.component.html',
  styleUrls: ['./validation-error.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValidationErrorComponent {
  @Input() public validationMessages: any;
  @Input() public control: any;
}
