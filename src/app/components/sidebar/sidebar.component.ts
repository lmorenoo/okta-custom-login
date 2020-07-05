import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/user-profile', title: 'Perfil de usuario', icon: 'ni-single-02 text-yellow', class: '' },
  { path: '/tables', title: 'Lista de alimentos', icon: 'ni-bullet-list-67 text-red', class: '' },
  { path: '/add', title: 'Agregar Donación', icon: 'ni-basket text-blue', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];

  constructor(private router: Router, private oktaAuth: OktaAuthService, private ref: ChangeDetectorRef) { }

  async ngOnInit() {
    const user = await this.oktaAuth.getUser();
    if (user) {
      const isFundacion = user.roles && user.roles.indexOf('fundacion') !== -1;
      if (isFundacion) {
        ROUTES.pop();
      }
      this.ref.detectChanges();
    }
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
