import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-existing-task",
  templateUrl: "./existing-task.component.html",
  styleUrls: ["./existing-task.component.css"]
})
export class ExistingTaskComponent implements OnInit {
  todoList = [{ name: "project" }, { name: " finish it" }];

  constructor() {}

  ngOnInit() {}
}
