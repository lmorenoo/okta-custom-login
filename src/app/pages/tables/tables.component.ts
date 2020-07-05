import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  isFundacion;
  tipoOrg;
  accessToken;
  listaAlimentos = [];
  orgName;

  constructor(private oktaAuth: OktaAuthService, private http: HttpClient, private datepipe: DatePipe, private toastr: ToastrService) { }

  async ngOnInit() {
    const isAuthenticated = await this.oktaAuth.isAuthenticated();
    if (isAuthenticated) {
      const user = await this.oktaAuth.getUser();
      this.isFundacion = user.roles && user.roles.indexOf('fundacion') !== -1;
      this.orgName = user.user.name;
      if (this.isFundacion) {
        this.tipoOrg = 'fundacion';
      } else {
        this.tipoOrg = 'organizacion';
      }
      this.accessToken = await this.oktaAuth.getAccessToken();
      this.obtenerAlimentos();
    }
  }

  async obtenerAlimentos() {
    this.http.get(
      `http://localhost:8080/publicacion/${this.tipoOrg}`,
      {
        headers: {
          Authorization: 'Bearer ' + this.accessToken
        }
      }
    ).subscribe((data: any) => {
      this.listaAlimentos = data;
      this.listaAlimentos.forEach(alimento => {
        alimento['fechaPublicacion'] = this.datepipe.transform(alimento.fechaPublicacion, "yyyy-MM-dd'T'HH:mm:ss");
        alimento['fechaRecogida'] = this.datepipe.transform(alimento.fechaRecogida, "yyyy-MM-dd'T'HH:mm:ss");
      })
    }, (err) => {
      console.error(err);
    });
  }

  async reservar(item) {

    this.http.put(
      'http://localhost:8080/publicacion', item,
      {
        headers: {
          Authorization: 'Bearer ' + this.accessToken
        }
      }
    ).subscribe((data: any) => {
      item.estado = 'Reservado';
      this.toastr.success('Donacion reservada exitosamente', 'Reservas');
    }, (err) => {
      console.error(err);
    });
  }

}
