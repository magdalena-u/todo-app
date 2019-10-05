import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainFormComponent } from './shared/main-form/main-form.component';
import { NewTaskInputComponent } from './core/new-task-input/new-task-input.component';
import { ExistingTaskComponent } from './core/existing-task/existing-task.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    NewTaskInputComponent,
    ExistingTaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
