import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskComponent } from './task-list/task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCreatorComponent } from './task-creator/task-creator.component';
import { TaskService } from "./services/task.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TaskGridComponent } from './task-grid/task-grid.component';
import { TaskMinimalComponent } from './task-grid/task-minimal/task-minimal.component';
import { TaskListNestedComponent } from './task-list-nested/task-list-nested.component';
import { TaskNestedComponent } from "./task-list-nested/task-nested/task-nested.component";
import { SidepanelComponent } from './sidepanel/sidepanel.component';
import { SidepanelService } from "./services/sidepanel.service";
import { SidepanelBodyComponent } from './sidepanel/sidepanel-body/sidepanel-body.component';
import { SidepanelItemComponent } from './sidepanel/sidepanel-item/sidepanel-item.component';
import { ListTypeService } from "./services/list-type.service";
import { TaskGeneratorService } from "./services/task-generator.service";


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    TaskCreatorComponent,
    TaskGridComponent,
    TaskMinimalComponent,
    TaskListNestedComponent,
    TaskNestedComponent,
    SidepanelComponent,
    SidepanelBodyComponent,
    SidepanelItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TaskService,
    SidepanelService,
    ListTypeService,
    TaskGeneratorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
