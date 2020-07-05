import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OktaAuthService } from '@okta/okta-angular';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  accessToken;
  donacion = {};
  constructor(private oktaAuth: OktaAuthService, private http: HttpClient, private datepipe: DatePipe, private toastr: ToastrService) { }

  async ngOnInit() {
    this.donacion['fechaPublicacion'] = this.datepipe.transform(new Date(), "yyyy-MM-dd'T'HH:mm:ss");
    this.accessToken = await this.oktaAuth.getAccessToken();
  }

  agregarDonacion() {
    if (this.donacion['tipoAlimento'] && this.donacion['cantidad'] && this.donacion['lugarRecogida']) {
      this.http.post(
        'http://localhost:8080/publicacion', this.donacion,
        {
          headers: {
            Authorization: 'Bearer ' + this.accessToken
          }
        }
      ).subscribe((data: any) => {
        this.toastr.success('Donacion registrada exitosamente', 'Donacion');
        this.donacion = {
          fechaPublicacion: this.datepipe.transform(new Date(), "yyyy-MM-dd'T'HH:mm:ss")
        }

      }, (err) => {
        console.error(err);
      });
    } else {
      this.toastr.warning('Faltan campos por llenar', 'Donacion');
    }
  }


}
