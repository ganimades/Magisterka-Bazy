import { Component } from '@angular/core';
import { TaskService } from "~/services/task.service";
import { Task } from '../../../shared/models'

@Component({
  selector: 'app-task-grid',
  moduleId: module.id,
  templateUrl: './task-grid.component.html',
})
export class TaskGridComponent {

  constructor(public taskService: TaskService) {
  }

  trackById(index, task: Task) {
    return task.id
  }
}
