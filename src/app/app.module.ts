import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InputTaskComponent } from './components/input-task/input-task.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

import { TaskListService } from  './services/task-list.service';
import { SharingDataService } from  './services/sharing-data.service';
import { UserService } from  './services/user.service';
import { AuthInterceptor } from  './others/auth.interceptor';

import { TasksComponent } from './components/tasks/tasks.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SameAsPasswordDirective } from './directives/same-as/same-as-password.directive';
import { HasSpacesDirective } from './directives/has-spaces/has-spaces.directive';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTaskComponent,
    TodoListComponent,
    TasksComponent,
    LoginFormComponent,
    SignupFormComponent,
    SameAsPasswordDirective,
    HasSpacesDirective,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [TaskListService, SharingDataService, UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
