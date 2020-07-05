import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import {
  OKTA_CONFIG,
  OktaAuthModule
} from '@okta/okta-angular';
import config from './app.config';
// Okta Guard and Service
import { OktaAuthGuard } from './app.guard';
import { DatePipe, LocationStrategy, PathLocationStrategy, HashLocationStrategy } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    OktaAuthModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: OKTA_CONFIG, useValue: config.oidc },
    OktaAuthGuard,
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
