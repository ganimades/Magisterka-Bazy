import { Component } from '@angular/core';
import {  TaskService } from "./services/task.service";
import { ListTypeService } from "./services/list-type.service";
import { ListType } from "../../../shared/models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(public taskService: TaskService,
              public listTypeService: ListTypeService) {
  }

  setListType(listType: ListType) {
    this.listTypeService.setListType(listType);
  }
}
