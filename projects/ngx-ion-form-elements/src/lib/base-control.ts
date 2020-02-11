import { Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

export abstract class BaseControl implements OnInit {
  @Input() public control: AbstractControl;
  @Input() public name: string;
  @Input() public value: any;
  @Input() public caption: string;
  @Input() public placeholder: string;
  @Input() public cssClass: string;
  @Input() public controlValidationMessages: any;
  @Input() public debounce = 500;

  public ngOnInit() {

    if (!this.control) {
      console.error('You did not provide the form control');
      return;
    }

    if (!this.name) {
      this.name = this.getControlName(this.control);
    }

    this.beforeValue();

    if (!this.value) {
      this.value = this.control.value;
    }
  }

  protected beforeValue() {

  }

  protected getControlName(control: AbstractControl): string | null {
    const group = control.parent as FormGroup;

    if (!group) {
      return null;
    }

    let name: string;

    Object.keys(group.controls).forEach(key => {
      const childControl = group.get(key);

      if (childControl !== control) {
        return;
      }

      name = key;
    });

    return name;
  }
}
