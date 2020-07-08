import { Component, OnInit } from '@angular/core';
import { SharingDataService } from 'src/app/services/sharing-data.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'nav-bar',
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark d-flex justify-content-center" *ngIf="isLogged">
      <div class="navbar-nav">
          <button class="nav-item btn btn-primary" (click)="logout()">LOGOUT</button>
      </div>
    </nav>
  `,
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private sharingDataService: SharingDataService,
    private userService: UserService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  logout(){
    this.userService.logout()
    this.sharingDataService.setUser(null)
    this.router.navigate(['/account/login'])
  }

  public get isLogged(){
    return this.userService.isLogged
  }
}
