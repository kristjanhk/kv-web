import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormComponent} from "../form.component";

@Component({
  selector: 'form-toggle',
  templateUrl: './form-toggle.component.html',
  styleUrls: ['./form-toggle.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormToggleComponent<T> extends FormComponent implements OnInit {
  @Input() label!: string;

  enabled!: boolean;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.enabled = this.form.value[this.field];
  }

  toggle(): void {
    this.enabled = !this.enabled;
    this.form.patchValue({
      [this.field]: this.enabled
    })
  }

}
