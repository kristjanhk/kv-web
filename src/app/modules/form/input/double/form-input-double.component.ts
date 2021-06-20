import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormComponent} from "../../form.component";

@Component({
  selector: 'form-input-double',
  templateUrl: './form-input-double.component.html',
  styleUrls: ['./form-input-double.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputDoubleComponent extends FormComponent {
  @Input() label!: string;
  @Input() input1!: Field;
  @Input() input2!: Field;

  constructor() {
    super();
  }

  getErrors(): string[] {
    throw Error('Unsupported');
  }

  getInput1Errors(): string[] {
    return this.form.controls[this.input1.field].errorMessages;
  }

  getInput2Errors(): string[] {
    return this.form.controls[this.input2.field].errorMessages;
  }
}

export interface Field {
  type: string;
  field: string
  hint?: string;
}


