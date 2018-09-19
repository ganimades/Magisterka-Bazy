import { Component } from "@angular/core";
import { ListType } from '../../shared/models';
import { TaskService } from '~/services/task.service';
import { ListTypeService } from '~/services/list-type.service';

@Component({
  selector: "ns-app",
  templateUrl: "app.component.html",
})

export class AppComponent {
  constructor(
      public taskService: TaskService,
      public listTypeService: ListTypeService) {
  }

  setListType(listType: ListType) {
    this.listTypeService.setListType(listType);
  }
}
