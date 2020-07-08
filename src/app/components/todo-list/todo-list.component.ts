import { Component, OnInit } from '@angular/core';
import { TaskListService } from '../../services/task-list.service';
import { Task } from '../../models/task.model'
import { ActivatedRoute } from '@angular/router';
import { SharingDataService } from 'src/app/services/sharing-data.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'todo-list',
  template: `
  <div *ngIf="taskList.length > 0; else listEmpty">
    <ul class="list-group">
        <div *ngFor="let task of taskList">
          <li class="list-group-item">
            <input type="checkbox"
              [id]="task.title"
              class="form-checkbox mr-2"
              [checked]="task.completed"
              (change)="updateTask(task)"/>
            <span [ngClass]="{completed : task.completed}">{{ task.title }}</span>
            <button class="btn btn-primary btn-sm ml-5" (click)="removeTask(task.id)">REMOVE</button>
          </li>
        </div>
      </ul>
  </div>
      <ng-template #listEmpty>
        <br/><br/>
        <p class="text-muted text-monospace">You have no tasks to do</p>
      </ng-template>
  `,
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {

  taskList: Task[] = [];
  userId: string;

  constructor(
    private taskListService: TaskListService,
    private userService: UserService,
    private sharingDataService: SharingDataService,
    private route: ActivatedRoute) {
    }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.getList()
    this.setUser()
    this.setTask()
  }

  setUser(){
    let user: User
    this.userService.fetchUserById(this.userId).subscribe(
      (response) => {
        console.log(user)
        user = response.user
      }
    )
  }

  setTask(){
    this.sharingDataService.taskList.subscribe(
      (data) => {
        if(data)
          this.taskList.push(data)
    })
  }

  removeTask(taskId: string){
    this.taskListService.deleteTask(taskId, this.userId).subscribe()
    this.getList()
  }

  updateTask(task: Task){
    task.completed = !task.completed
    this.taskListService.updateTask(task, this.userId).subscribe()
    this.getList()
  }

  getList(){
    this.taskListService.getTaskListById(this.userId).subscribe(
      (response) => {
        this.taskList = response
      }
    )
  }
}
