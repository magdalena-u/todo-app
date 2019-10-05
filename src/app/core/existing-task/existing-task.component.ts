import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-existing-task",
  templateUrl: "./existing-task.component.html",
  styleUrls: ["./existing-task.component.css"]
})
export class ExistingTaskComponent implements OnInit {
  todoList = [{ name: "project" }, { name: " finish it" }];

  constructor() {}

  ngOnInit() {}

  addItem(task: string) {
    this.todoList.push({ name: task });
  }
}
