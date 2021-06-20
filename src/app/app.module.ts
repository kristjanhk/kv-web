import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GraphComponent} from './modules/graph/graph.component';
import {ChartsModule} from "ng2-charts";
import {CommonModule} from "@angular/common";
import {FilterComponent} from './modules/filter/filter.component';
import {FormModule} from "./modules/form/form.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RepositoryModule} from "./generated/repository.module";

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    FilterComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ChartsModule,
    HttpClientModule,
    RepositoryModule,
    FormModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
