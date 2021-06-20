import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormComponent} from "../form.component";

@Component({
  selector: 'form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormButtonComponent extends FormComponent {
  @Input() label!: string;
  @Input() submit: boolean = false;

  constructor() {
    super();
  }
}
