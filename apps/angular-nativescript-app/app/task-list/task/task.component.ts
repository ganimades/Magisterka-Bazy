import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Task } from '../../../../shared/models';

@Component({
  selector: 'app-task',
  moduleId: module.id,
  templateUrl: './task.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {
  @Input() task: Task;
  @Output() taskDeleted = new EventEmitter<number>();

  deleteTask() {
    console.log("delete");
    this.taskDeleted.emit(this.task.id);
  }

  inputChange(event) {
    this.task.isDone = event.value
  }
}
