import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MainFormComponent } from "./shared/main-form/main-form.component";
import { NewTaskInputComponent } from "./core/new-task-input/new-task-input.component";
import { ExistingTaskComponent } from "./core/existing-task/existing-task.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";

@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    NewTaskInputComponent,
    ExistingTaskComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
