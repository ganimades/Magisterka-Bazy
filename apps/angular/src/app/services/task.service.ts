import { Injectable } from '@angular/core';
import { TaskGeneratorService } from "./task-generator.service";
import { Task } from '../../../../shared/models'

@Injectable()
export class TaskService {
  private tasks: Task[] =[];
  private static counter = 0;

  constructor(private taskGeneratorService: TaskGeneratorService) {
    this.updateList(taskGeneratorService.default());
  }

  getTasks() {
    return this.tasks
  }

  addTask(task: Task) {
    task.id = ++TaskService.counter;
    this.tasks.push(task)
  }

  deleteTask(taskId: number) {
    const index = this.tasks.findIndex(value => value.id === taskId);
    this.tasks.splice(index, 1)
  }

  updateList(tasks: Task[]) {
    tasks.forEach(task => {
      task.id = ++TaskService.counter
    });
    this.tasks = tasks
  }

  clearAll() {
    this.tasks = [];
  }
}
