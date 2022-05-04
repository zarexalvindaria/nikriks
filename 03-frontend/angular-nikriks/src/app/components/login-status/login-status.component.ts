import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css'],
})
export class LoginStatusComponent implements OnInit {
  userGroup?: string;
  isAdmin?: boolean;
  isAuthenticated: boolean = false;
  userFirstName?: string;

  storage: Storage = sessionStorage;

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
        this.userFirstName = res.given_name;

        // console.log(`user: ` + JSON.stringify(res));
        this.isAdmin = res['groups'].includes('Administrator');
        // console.log('userGroup: ' + this.userGroup);

        // retrieve the user's email from authentication response
        const theEmail = res.email;

        // now store the email in browser storage
        this.storage.setItem('userEmail', JSON.stringify(theEmail));
      });
    }
  }

  logout() {
    // Terminates the session with Okta and removes current tokens.
    this.oktaAuthService.signOut();
  }
}
