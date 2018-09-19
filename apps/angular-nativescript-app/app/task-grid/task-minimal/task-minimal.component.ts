import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Task } from '../../../../shared/models'

@Component({
  selector: 'app-task-minimal',
  moduleId: module.id,
  templateUrl: './task-minimal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskMinimalComponent {
  @Input() task: Task;

  inputChange(event) {
    this.task.isDone = event.value
  }
}
