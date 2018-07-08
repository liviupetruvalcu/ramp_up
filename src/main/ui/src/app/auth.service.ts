import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './module/model.user';
import { AppComponent } from './app.component';
import { Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticated = false;
  constructor(private http: HttpClient) { }
  userLog: User;

getAuthorizationHeaders(){
  var base64Credentials: string = btoa(this.userLog.username + ':' + this.userLog.password);
  return base64Credentials;
}

  authenticate(user: User){
    this.userLog = user;
    return this.http.get(AppComponent.API_URL + "/account/login").subscribe((response:Response) => {
      let user = response.json().principal;
        console.log('IN AUTH!!'); 
      if(user){
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
    });
  }
}
