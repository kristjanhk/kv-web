import {Component, OnInit, ViewChild} from '@angular/core';
import {FilterModel} from "./modules/filter/filter.model";
import {GraphComponent} from "./modules/graph/graph.component";
import {ReactiveFormConfig} from "@rxweb/reactive-form-validators";
import {Validation} from "./validation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(GraphComponent) graph!: GraphComponent;

  constructor() {
  }

  ngOnInit(): void {
    ReactiveFormConfig.set({
      validationMessage: Validation.getMessages(),
    });
  }

  loadGraph(input: FilterModel): void {
    this.graph.loadGraph(input);
  }
}
