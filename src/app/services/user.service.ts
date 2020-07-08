import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { tap } from 'rxjs/operators'

const BASE_URL = 'http://localhost:3000/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public fetchUserById(userId : string)  {
    const _url = BASE_URL + userId
    return this.http.get<any>(_url)
  }

  public fetchUsers() : Observable<User[]> {
    const _url = BASE_URL
    return this.http.get<User[]>(_url, httpOptions)
  }

  public signin(user : User) {
    const _url = BASE_URL + 'login'
    return this.http.post<any>(_url, {username: user.username, password: user.password}).pipe(tap(
      res => { localStorage.setItem('token', res.token) }
    ))
  }

  public signup(user: User) {
    const _url = BASE_URL + "signup"
    return this.http.post<any>(_url, {username: user.username, password: user.password}, httpOptions).pipe(tap(
      res => { localStorage.setItem('token', res.token) }
    ))
  }

  public deleteUser(id : string) : Observable<any> {
    const _url = BASE_URL + id
    return this.http.delete<any>(_url)
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public get isLogged() : boolean {
    return localStorage.getItem('token') !== null
  }

  public logout() {
    localStorage.removeItem('token')
  }
}
