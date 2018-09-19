import { Component, OnInit } from '@angular/core';
import { TaskService } from '~/services/task.service';

@Component({
  moduleId: module.id,
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
})
export class TaskCreatorComponent implements OnInit {
  taskName: string;

  constructor(
      private taskService: TaskService,
  ) {
  }

  ngOnInit() {
    this.resetForm();
  }

  private resetForm() {
    this.taskName = '';
  }

  createTask() {
    this.taskService.addTask({
      name: this.taskName,
      isDone: false,
    });
    this.resetForm();
  }

}
