import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Task } from '../../../../../shared/models'

@Component({
  selector: 'app-task-minimal',
  templateUrl: './task-minimal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskMinimalComponent {
  @Input() task: Task;

  constructor() {
  }
}
