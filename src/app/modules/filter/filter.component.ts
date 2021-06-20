import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {KvType} from "../../generated/models/kv-type";
import {KvCounty} from "../../generated/models/kv-county";
import {IFormGroup, RxFormBuilder} from "@rxweb/reactive-form-validators";
import {FilterModel} from "./filter.model";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {
  @Output() onFilter: EventEmitter<FilterModel> = new EventEmitter<FilterModel>();

  typeOptions: string[] = Object.values(KvType);
  countyOptions: string[] = Object.values(KvCounty);
  roomsOptions: number[] = Array.from({length: 8}, (_, i) => i + 1);

  form: IFormGroup<FilterModel>

  constructor(private fb: RxFormBuilder) {
    this.form = this.fb.formGroup(FilterModel) as IFormGroup<FilterModel>;
  }

  submit(): void {
    console.log(this.form.value);
    if (this.form.valid) {
      this.onFilter.emit(this.form.value)
      return;
    }
    console.log('form invalid');
    console.log(this.form);
  }
}
