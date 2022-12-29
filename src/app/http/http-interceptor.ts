import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AUTH_NAME, BASE_API_URL } from '../global';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    let authToken: any = window.localStorage.getItem(AUTH_NAME);    
    authToken = !authToken ? '':  'Bearer ' + JSON.parse(authToken).token;
  

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({ 
        setHeaders: { Authorization: authToken }, 
        url: BASE_API_URL + req.url
      });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}