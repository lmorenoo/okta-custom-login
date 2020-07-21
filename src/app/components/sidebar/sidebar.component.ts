import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { User } from 'src/app/objects/user';
import { UserService } from 'src/app/user/user-service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/user-profile', title: 'Perfil de usuario', icon: 'ni-single-02 text-yellow', class: '' },
  { path: '/cuestionario', title: 'Cuestionario', icon: 'ni-book-bookmark text-blue', class: '' },
  { path: '/code-learn', title: 'Módulo de Aprendizaje', icon: 'ni-bullet-list-67 text-green', class: '' },
  { path: '/reporte-estudiante', title: 'Reporte de estudiantes', icon: 'ni-books text-red', class: '' },
  { path: '/admin-code-learn', title: 'Administrar estilos de aprendizaje', icon: 'ni-settings-gear-65 text-black', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  orgName;
  isStudent = true;
  user: User;

  constructor(private oktaAuth: OktaAuthService, private userService: UserService) { }

  async ngOnInit() {
    const oktaUser = await this.oktaAuth.getUser();
    this.isStudent = !(oktaUser.roles && oktaUser.roles.indexOf('docente') !== -1);
    if (this.isStudent) {
      this.orgName = oktaUser.user.name;
      this.user = await this.userService.getUser(oktaUser.email);
      ROUTES.splice(3, 2);
      if (!this.user || !this.user.valoracionTipoAprendizaje) {
        ROUTES.splice(2);
      }
    } else {
      this.orgName = `Docente ${oktaUser.user.name}`;
    }
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
