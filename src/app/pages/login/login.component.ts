import { Component, OnInit, OnDestroy } from '@angular/core';
import * as OktaSignIn from '@okta/okta-signin-widget';
import sampleConfig from '../../app.config';
import { OktaAuthService } from '@okta/okta-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  signIn: any;

  constructor(private oktaAuth: OktaAuthService, private router: Router) {
    this.signIn = new OktaSignIn({
      /**
       * Note: when using the Sign-In Widget for an ODIC flow, it still
       * needs to be configured with the base URL for your Okta Org. Here
       * we derive it from the given issuer for convenience.
       */
      baseUrl: sampleConfig.oidc.issuer.split('/oauth2')[0],
      clientId: sampleConfig.oidc.clientId,
      redirectUri: sampleConfig.oidc.redirectUri,
      language: 'es',
      i18n: {
        es: {
          'primaryauth.title': 'Inicia sesion en Code Learn',
        },
      },
      authParams: {
        pkce: true,
        responseMode: 'query',
        issuer: sampleConfig.oidc.issuer,
        display: 'page'
      },
    });

  }

  async ngOnInit() {
    const isAuthenticated = await this.oktaAuth.isAuthenticated();
    if (isAuthenticated) {
      this.signIn.hide();
      this.router.navigate(['/user-profile']);
    } else {
      this.signIn.renderEl(
        { el: '#sign-in-widget' },
        (res) => {
          if (res.status === 'SUCCESS') {
            this.signIn.hide();
            this.router.navigate(['/user-profile']);
            // Hide the widget
          }
        },
        (err) => {
          throw err;
        },
      );
    }
  }
  ngOnDestroy() {
  }

}
