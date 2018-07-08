import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const authHeader = this.auth.getAuthorizationHeaders();

    const authRequest = req.clone({headers: req.headers.set('Authorization', "Basic" + authHeader)
                                                       .set('Accept', 'application/json')});
    return next.handle(authRequest);
  }

}
