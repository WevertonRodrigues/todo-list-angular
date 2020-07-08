import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model'
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent implements OnInit {

  user : User = new User('', '');

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.signup(this.user).subscribe(
      (response) => {
        if(response.auth != false)
        this.router.navigate(['/account/'+ response.id + '/tasks'])
      }
    )
  }
}
