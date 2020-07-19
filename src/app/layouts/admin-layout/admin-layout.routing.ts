import { Routes } from '@angular/router';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { CuestionarioComponent } from '../../pages/cuestionario/cuestionario.component';
import { CodeLearnComponent } from 'src/app/pages/code-learn/code-learn.component';
import { AdminCodeLearnComponent } from 'src/app/pages/admin-code-learn/admin-code-learn.component';
import { ReporteEstudianteComponent } from 'src/app/pages/reporte-estudiante/reporte-estudiante.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'cuestionario', component: CuestionarioComponent },
  { path: 'code-learn', component: CodeLearnComponent },
  { path: 'admin-code-learn', component: AdminCodeLearnComponent },
  { path: 'reporte-estudiante', component: ReporteEstudianteComponent }
];
