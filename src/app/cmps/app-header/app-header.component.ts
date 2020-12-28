import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor(private userService: UserService, private route: ActivatedRoute,private router:Router) {

  }
  user
  ngOnInit(): void {
    this.user = this.userService.getUser()
  }
  doLogout() {
    this.user = null;
    this.userService.doLogout()
    this.router.navigateByUrl('/signup')
  }
}
