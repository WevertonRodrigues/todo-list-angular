import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.userService.getToken();
      if(this.userService.isLogged){
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken
            }
        });
      }
    return next.handle(request);
  }
}
