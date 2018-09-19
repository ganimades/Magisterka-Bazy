import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../../../shared/models'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent {
  @Input() task: Task;
  @Output() taskDeleted = new EventEmitter<number>();

  constructor() {
  }

  deleteTask() {
    this.taskDeleted.emit(this.task.id)
  }
}
