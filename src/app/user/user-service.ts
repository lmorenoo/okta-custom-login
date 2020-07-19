import { Injectable } from "@angular/core";
import { OktaAuthService } from "@okta/okta-angular";
import { HttpClient } from "@angular/common/http";
import { User } from "../objects/user";

@Injectable()
export class UserService {

  constructor(public oktaAuth: OktaAuthService, private http: HttpClient) {
  }

  async getUser(id: string): Promise<User> {
    const accessToken = await this.oktaAuth.getAccessToken();
    // Make request
    return this.http.get(
      `http://localhost:7878/users/${id}`, {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    }).toPromise()
      .then((data: any) => {
        return data as User;
      }).catch(err => {
        console.error(err);
        return undefined;
      });
  }
}
