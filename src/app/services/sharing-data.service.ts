import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { TaskListService } from './task-list.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private taskListObserver: BehaviorSubject<Task> = new BehaviorSubject<Task>(null)
  taskList: Observable<Task> = this.taskListObserver.asObservable()
  private currentUserObserver: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  currentUser: Observable<User> = this.currentUserObserver.asObservable();;

  constructor() { }

  setTask(newTask : Task){
    this.taskListObserver.next(newTask)
  }

  setUser(currentUser : User){
    this.currentUserObserver.next(currentUser)
  }

}
