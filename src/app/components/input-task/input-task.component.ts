import { Component, OnInit } from '@angular/core';
import { TaskListService } from '../../services/task-list.service';
import { ActivatedRoute } from '@angular/router';
import { SharingDataService } from 'src/app/services/sharing-data.service';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'input-task',
  template: `
    <div class="form-inline">
      <input id="inputTask" class="form-control mx-2" autofocus placeholder="Task Title" #inputTask (keyup.enter)="addTask(inputTask)">
      <button class="btn btn-primary" (click)="addTask(inputTask)">+ ADD</button>
    </div>
  `,
  styleUrls: ['./input-task.component.css']
})
export class InputTaskComponent implements OnInit {

  userId : string

  constructor(private taskListService: TaskListService, private sharingDataService: SharingDataService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');
  }

  addTask(input: any) {
    if(input.value != ""){
      let task : Task = new Task(input.value, false);
      this.taskListService.createTask(task, this.userId).subscribe(
        (response) => {
          this.sharingDataService.setTask(response)
        }
      )
      input.value = ""
    }
  }

}
