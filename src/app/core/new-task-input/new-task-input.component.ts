import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-new-task-input",
  templateUrl: "./new-task-input.component.html",
  styleUrls: ["./new-task-input.component.css"]
})
export class NewTaskInputComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  submitValue(event: string) {
    this.submit.emit(event);
  }
}
