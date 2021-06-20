import {Directive, Input} from "@angular/core";
import {IFormGroup} from "@rxweb/reactive-form-validators";

@Directive()
export abstract class FormComponent {
  @Input() form!: IFormGroup<any>;
  @Input() field!: string;

  getErrors(): string[] {
    return this.form.controls[this.field].errorMessages;
  }
}
