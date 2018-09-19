import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TaskService } from "../services/task.service";

@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
})
export class TaskCreatorComponent implements OnInit {
  newTaskForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
  ) {
  }

  ngOnInit() {
    this.newTaskForm = this.fb.group({
      taskName: this.fb.control("", Validators.required),
    });
  }

  createTask() {
    this.taskService.addTask({
      name: this.newTaskForm.value.taskName,
      isDone: false,
    });
    this.newTaskForm.reset();
  }

}
