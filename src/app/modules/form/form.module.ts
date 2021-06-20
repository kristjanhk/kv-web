import {NgModule} from "@angular/core";
import {FormSelectComponent} from "./select/form-select.component";
import {FormToggleComponent} from "./toggle/form-toggle.component";
import {FormInputDoubleComponent} from "./input/double/form-input-double.component";
import {FormButtonComponent} from "./button/form-button.component";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RxReactiveFormsModule} from "@rxweb/reactive-form-validators";

@NgModule({
  declarations: [
    FormSelectComponent,
    FormToggleComponent,
    FormInputDoubleComponent,
    FormButtonComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule
  ],
  exports: [
    FormSelectComponent,
    FormToggleComponent,
    FormInputDoubleComponent,
    FormButtonComponent
  ]
})
export class FormModule {

}
