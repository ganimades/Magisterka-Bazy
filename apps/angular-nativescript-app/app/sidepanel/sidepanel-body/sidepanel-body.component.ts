import { AfterContentChecked, Component } from '@angular/core';
import { TaskService } from "~/services/task.service";
import { ListTypeService } from "~/services/list-type.service";
import { TaskGeneratorService } from "~/services/task-generator.service";
import { startMeasure, stopMeasure } from '~/perf-measure'

@Component({
  selector: 'app-sidepanel-body',
  moduleId: module.id,
  templateUrl: './sidepanel-body.component.html',
})
export class SidepanelBodyComponent implements AfterContentChecked{

  constructor(public taskService: TaskService,
              public listTypeService: ListTypeService,
              public taskGeneratorService: TaskGeneratorService) {
  }

  genDefault() {
    startMeasure('generate Default');
    this.taskService.updateList(this.taskGeneratorService.default())
  }

  genRandom100() {
    startMeasure('generate Random 100');
    this.taskService.updateList(this.taskGeneratorService.random100())
  }

  genRandom500() {
    startMeasure('generate Random 500');
    this.taskService.updateList(this.taskGeneratorService.random500())
  }

  genRandom1k() {
    startMeasure('generate Random 1k');
    this.taskService.updateList(this.taskGeneratorService.random1k())
  }

  genRandom5k() {
    startMeasure('generate Random 5k');
    this.taskService.updateList(this.taskGeneratorService.random5k())
  }

  genRandom10k() {
    startMeasure('generate Random 10k');
    this.taskService.updateList(this.taskGeneratorService.random10k())
  }

  genRandom20k() {
    startMeasure('generate Random 20k');
    this.taskService.updateList(this.taskGeneratorService.random20k())
  }

  ngAfterContentChecked(): void {
    stopMeasure()
  }

}
