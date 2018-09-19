import { Injectable } from '@angular/core';
import { Task } from '../../../shared/models'

@Injectable()
export class TaskGeneratorService {

  constructor() {
  }

  default(): Task[] {
    return [{
      isDone: true,
      name: "Update Excel"
    }, {
      isDone: false,
      name: "Clean the room"
    }, {
      isDone: true,
      name: "Go shopping"
    }]
  }

  random100() {
    return this.random(100)
  }

  random500() {
    return this.random(500)
  }

  random1k() {
    return this.random(1000)
  }

  random5k() {
    return this.random(5000)
  }

  random10k() {
    return this.random(10000)
  }

  random20k() {
    return this.random(20000)
  }

  random(amount: number): Task[] {
    const arr = Array<Task>(amount);
    for (let i = 0; i < amount; i++) {
      const rand = Math.random();
      arr[i] = {
        isDone: rand > 0.5,
        name: `${i} - ${rand}`
      }
    }
    return arr;
  }
}
