
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component'
import { AppComponent } from './app.component'
import { SignupFormComponent } from './components/signup-form/signup-form.component'
import { LoginFormComponent } from './components/login-form/login-form.component'
import { AuthGuard } from './others/auth.guard'


const routes: Routes = [
  { path: 'account', component: AppComponent, children: [
      { path: 'signup', component: SignupFormComponent },
      { path: 'login', component: LoginFormComponent },
      { path: ':userId/tasks', component: TasksComponent, canActivate: [AuthGuard]},
    ]
  },
  { path: '',   redirectTo: '/account/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
