import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor(public oktaAuth: OktaAuthService) {
  }

  async ngOnInit() {
    const isAuthenticated = await this.oktaAuth.isAuthenticated();
    if (!isAuthenticated) {
      this.oktaAuth.logout("/login");
    }
  }

}
