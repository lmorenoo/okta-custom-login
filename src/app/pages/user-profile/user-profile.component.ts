import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  orgName;
  email;
  constructor(private oktaAuth: OktaAuthService) {
    setTimeout(() => {
    }, 5);
  }

  async ngOnInit() {
    const user = await this.oktaAuth.getUser();
    if (user) {
      this.orgName = user.user.name;
      this.email = user.user.email;
    }
  }

}
