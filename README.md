# EstilosAprendizajeUi DONE

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).



## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Prerequisitos DONE

Antes de correr esta app, se necesita lo siguiente:

* An Okta Developer Account, you can sign up for one at https://developer.okta.com/signup/.
* An Okta Application, configured for Singe-Page App (SPA) mode. This is done from the Okta Developer Console and you can find instructions [here][OIDC SPA Setup Instructions].  When following the wizard, use the default properties.  They are are designed to work with our sample applications.

### Okta config DONE
Para funcionar con Okta se hace uso de la libreria `@okta/okta-angular`, con ella podemos redireccionar a okta para el respectivo login, verificar si esta logueado el usuario,
hacer logout, ademas de obtener toda la data el usuario que necesitemos u obtener un token para hacer request al backend.

Se necesita obtener la siguiente informacion desde Okta Developer Console:

- **Client Id** - The client ID of the SPA application that you created earlier. This can be found on the "General" tab of an application, or the list of applications.  This identifies the application that tokens will be minted for.
- **Issuer** - This is the URL of the authorization server that will perform authentication.  All Developer Accounts have a "default" authorization server.  The issuer is a combination of your Org URL (found in the upper right of the console home page) and `/oauth2/default`. For example, `https://dev-1234.oktapreview.com/oauth2/default`.

La configuracion de Okta esta en el archivo `.env`
Esta configuracion se puede obtener por variables de entorno.

```ini
ISSUER=https://yourOktaDomain.com/oauth2/default
CLIENT_ID=123xxxxx123
```

Esta configuracion se exporta a travez de `app.config.ts` y sera usada para la respectiva configuracion con Okta
Para terminar la configuracion de Okta se adiciona okta config en app.module.ts
Una vez realizado estos pasos, podemos utilizar OktaAuthService para controlar la autenticacion, obtener accessToken para la autenticacion con el BackEnd, informacion del usuario...

### Run App DONE
Run `npm ci`
Run `npm start` corre por el puerto 4200

#### GUIA DONE
Cada vez que un usuario se autentica se verifica si es estudiante o docente, en caso de ser estudiante 
se hace un request GET /users/{id} para saber TipoDeAprendizajes que tiene el usuario
	- En caso que este registrado y tenga un tipo de aprendizaje se redireccionara a los modulos correspondientes
	- En caso que no este registrado, se redireccionara a registro de cuestionario
		- Una vez se registre el cuestionario, se hara un request POST para crear el usuario en la table User (id->email, name->name, usrtipoaprendizaje -> tipo de aprendizaje)	

#Componentes DONDE
Los componentes de `Cuestionario` y `Code-Learn` fueron agregados, por lo tanto solo es necesario ingresar en el respectivo html y/o ts lo referente a ese modulo
Ejemplo: Si necesita ingresar logica para Cuestionario se utilizaria cuestionario.component.ts, para manejar estilos cuestionario.component.scss, modificar el html cuestionario.component.html,
		 agregar pruebas unitarias cuestionario.component.spec.ts
		 
### Internacionalizacion i18n DONE
Propiedades de Okta se pueden encontrar en el siguiente link https://github.com/okta/okta-signin-widget/blob/master/packages/@okta/i18n/src/properties/login.properties
Para modificar el idioma a utilizar para el login, ir a `login.component.ts` y modificar `language` de OktaSignIn de acuerdo a la preferencia

### Referencias
[Angular CLI]: https://cli.angular.io/
[Okta Angular Library]: https://github.com/okta/okta-oidc-js/tree/master/packages/okta-angular
[PKCE Flow]: https://developer.okta.com/docs/guides/implement-auth-code-pkce
[OIDC SPA Setup Instructions]: https://developer.okta.com/docs/guides/sign-into-spa/angular/before-you-begin
[Okta Sign In Widget]: https://github.com/okta/okta-signin-widget
