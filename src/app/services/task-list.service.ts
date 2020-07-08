import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

const BASE_URL = 'http://localhost:3000/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  constructor(private http: HttpClient) { }

  public getTaskListById(userId: string) : Observable<Task[]> {
    const _url = BASE_URL + userId + "/tasks"
    return this.http.get<Task[]>(_url)
  }

  public createTask(task: Task, userId: string) : Observable<Task> {
    const _url = BASE_URL + userId + "/tasks"
    return this.http.post<Task>(_url, {title: task.title, completed: task.completed}, httpOptions)
  }

  public updateTask(task: Task, userId: string) : Observable<Task> {
    const _url = BASE_URL + userId + "/tasks/" + task.id
    return this.http.put<Task>(_url, {title: task.title, completed: task.completed}, httpOptions)
  }

  public deleteTask(taskId: string, userId: string) : Observable<any> {
    const _url = BASE_URL + userId + "/tasks/" + taskId
    return this.http.delete<any>(_url, httpOptions)
  }
}
