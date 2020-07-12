import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit, OnDestroy {
  test: Date = new Date();
  public isCollapsed = false;

  isAuthenticated: boolean;
  isFundacion: boolean;
  userName: string;

  constructor(public oktaAuth: OktaAuthService, private router: Router) { }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    if (this.isAuthenticated) {
      const user = await this.oktaAuth.getUser();
      this.isFundacion = user.roles && user.roles.indexOf('fundacion') !== -1;
      this.userName = user.user.name;
    }

    var html = document.getElementsByTagName("html")[0];
    html.classList.add("auth-layout");
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("bg-gradient-primary");
    this.router.events.subscribe((event) => {
      // this.isCollapsed = true;
   });

  }

  login() {
    this.oktaAuth.loginRedirect("/user-profile");
  }

  ngOnDestroy() {
    var html = document.getElementsByTagName("html")[0];
    html.classList.remove("auth-layout");
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("bg-gradient-primary");
  }
}
