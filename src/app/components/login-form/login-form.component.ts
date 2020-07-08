import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  users : User[] = []
  user : User = new User('', '')

  constructor(
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.signin(this.user).subscribe(
      (response) => {
        if(response.auth != false){
          this.router.navigate(['/account/'+ response.id + '/tasks'])
        }
      }
    )
  }
}
