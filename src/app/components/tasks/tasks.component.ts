import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'tasks',
  template: `
    <h2 class="text-center">Add a task</h2><br/>
    <input-task></input-task><br />
    <todo-list class="d-flex align-items-center justify-content-center"></todo-list>
  `,
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
