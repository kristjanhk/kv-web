import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormComponent} from "../form.component";

@Component({
  selector: 'form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormSelectComponent extends FormComponent {
  @Input() label!: string;
  @Input() options!: (string | number)[];

  constructor() {
    super();
  }
}
