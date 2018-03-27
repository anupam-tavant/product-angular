import { Component } from '@angular/core';
import {Angular2TokenService} from "angular2-token";
import {environment} from "../environments/environment";
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _authToken: Angular2TokenService){
    this._authToken.init(environment.token_auth_config);
/*     this._authToken.signIn({email: "user@example.com", password: "monkey67"}).subscribe(

      res => {

        console.log('auth response:', res);
        console.log('auth response headers: ', res.headers.toJSON()); //log the response header to show the auth token
        console.log('auth response body:', res.json()); //log the response body to show the user 
      },

      err => {
        console.error('auth error:', err);
      }
  ) */
  }
  title = 'Home Title';
  developer: String="Anupam Mohapatra";
}
