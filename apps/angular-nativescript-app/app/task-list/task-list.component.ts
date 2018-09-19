import { Component } from '@angular/core';
import { TaskService } from "~/services/task.service";
import { Task } from '../../../shared/models'

@Component({
  moduleId: module.id,
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent  {

  constructor(public taskService: TaskService) {

  }

  onTaskDelete(taskId: number) {
    this.taskService.deleteTask(taskId)
  }

  trackById(index, task: Task) {
    return task.id
  }
}
