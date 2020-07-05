import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  isAuthenticated;
  orgName;

  constructor(private oktaAuth: OktaAuthService, location: Location, private element: ElementRef, private router: Router) {
    this.location = location;
  }

  async ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.checkIsAuthenticated();
    const user = await this.oktaAuth.getUser();
    if (user) {
      this.orgName = user.user.name;
    }
  }
  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }

  async checkIsAuthenticated() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }

  logout() {
    this.oktaAuth.logout('');
  }

}
