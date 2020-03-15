import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { BaseControl } from '../base-control';

@Component({
  selector: 'ife-dropdown-field',
  templateUrl: './dropdown-field.component.html',
  styleUrls: ['./dropdown-field.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownFieldComponent extends BaseControl {
  @Input() public items: any[];
  @Input() public caption: string;
  @Input() public placeholder = 'Select an option';
  @Input() public popoverHeader: string;
  @Input() public interface = 'popover' || 'action-sheet' || 'alert';
  @Input() public multiSelect = false;

  @Output() public onChange = new EventEmitter<any>();

  public alertOptions: any = {
    header: this.popoverHeader,
    translucent: true,
    showBackdrop: false
  };

  public beforeValue() {
    this.setValues();
  }

  public setValues(): string[] {
    const itemString = new Array();
    this.items.forEach(element => {
      itemString.push(element.Id);
    });
    return itemString;
  }

  public change(event: any) {
    this.onChange.emit(event);
  }

}
