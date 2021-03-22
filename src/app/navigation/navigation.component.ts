import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  user!: User;

    constructor(
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.user.subscribe(x => this.user = x);
    }

    logout() {
        this.authenticationService.logout();
    }

  ngOnInit(): void {
  }

}
