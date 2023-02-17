import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css'],
})
export class AdminMenuComponent implements OnInit {
  userGroup?: string;
  isAdmin?: boolean;
  isAuthenticated: boolean = false;

  constructor(private oktaAuthService: OktaAuthService) {}

  ngOnInit(): void {
    // Subscribe to authentication state changes
    this.oktaAuthService.$authenticationState.subscribe((result) => {
      this.isAuthenticated = result;
      this.getUserDetails();
    });
  }

  getUserDetails() {
    if (this.isAuthenticated) {
      // Fetch the logged in user details (user's claims)
      this.oktaAuthService.getUser().then((res) => {
        // console.log(`user: ` + JSON.stringify(res));
        this.isAdmin = res['groups'].includes('Administrator');
        // console.log('userGroup: ' + this.userGroup);

        // retrieve the user's email from authentication response
        const theEmail = res.email;
      });
    }
  }
}
