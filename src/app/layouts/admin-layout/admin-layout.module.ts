import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { IconsComponent } from '../../pages/icons/icons.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { CuestionarioComponent } from '../../pages/cuestionario/cuestionario.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CodeLearnComponent } from 'src/app/pages/code-learn/code-learn.component';
import { AdminCodeLearnComponent } from 'src/app/pages/admin-code-learn/admin-code-learn.component';
import { ReporteEstudianteComponent } from 'src/app/pages/reporte-estudiante/reporte-estudiante.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    UserProfileComponent,
    CuestionarioComponent,
    CodeLearnComponent,
    AdminCodeLearnComponent,
    ReporteEstudianteComponent,
    IconsComponent
  ]
})

export class AdminLayoutModule {}
