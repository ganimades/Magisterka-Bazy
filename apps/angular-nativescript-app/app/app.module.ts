import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { ListTypeService } from '~/services/list-type.service';
import { SidepanelService } from '~/services/sidepanel.service';
import { TaskGeneratorService } from '~/services/task-generator.service';
import { TaskService } from '~/services/task.service';
// Uncomment and add to NgModule imports if you need to use two-way binding
import { TaskCreatorComponent } from '~/task-creator/task-creator.component';
import { NativeScriptFormsModule } from 'nativescript-angular';
import { TaskListComponent } from '~/task-list/task-list.component';
import { TaskComponent } from '~/task-list/task/task.component';
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';
import { TaskGridComponent } from '~/task-grid/task-grid.component';
import { TaskMinimalComponent } from '~/task-grid/task-minimal/task-minimal.component';
import { TaskListNestedComponent } from '~/task-list-nested/task-list-nested.component';
import { TaskNestedComponent } from '~/task-list-nested/task-nested/task-nested.component';
import { SidepanelComponent } from '~/sidepanel/sidepanel.component';
import { SidepanelBodyComponent } from '~/sidepanel/sidepanel-body/sidepanel-body.component';
import { SidepanelItemComponent } from '~/sidepanel/sidepanel-item/sidepanel-item.component';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
  bootstrap: [
    AppComponent,
  ],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    TNSCheckBoxModule,
  ],
  declarations: [
    AppComponent,
    TaskCreatorComponent,
    TaskListComponent,
    TaskComponent,
    TaskGridComponent,
    TaskMinimalComponent,
    TaskListNestedComponent,
    TaskNestedComponent,
    SidepanelComponent,
    SidepanelBodyComponent,
    SidepanelItemComponent,
  ],
  providers: [
    ListTypeService,
    SidepanelService,
    TaskGeneratorService,
    TaskService,
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
  ],
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {}
