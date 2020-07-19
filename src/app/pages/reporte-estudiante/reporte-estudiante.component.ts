import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-reporte-estudiante',
  templateUrl: './reporte-estudiante.component.html',
  styleUrls: ['./reporte-estudiante.component.scss']
})
export class ReporteEstudianteComponent implements OnInit {

  constructor(private oktaAuth: OktaAuthService) { }

  async ngOnInit() {
  }
}
