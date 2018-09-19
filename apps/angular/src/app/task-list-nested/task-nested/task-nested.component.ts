import { Component, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-nested',
  templateUrl: './task-nested.component.html',
})
export class TaskNestedComponent {
  @Input() index: number;

  constructor(public taskService: TaskService) {
  }
}
