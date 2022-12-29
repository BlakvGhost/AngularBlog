import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Router } from '@angular/router';
import { AUTH_NAME, BASE_API_URL } from '../global';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient, private router: Router){}

  isLogin(): boolean {
    let u = window.localStorage.getItem(AUTH_NAME);    
    return !u ? false: JSON.parse(u).token
  }

  setLoginInStorage(data: any) {
    let _data = JSON.stringify(data);
    window.localStorage.setItem(AUTH_NAME, _data);
  }

  private setHttp(url: string, data: User) {
    return this.http.post<any>(url, data).pipe(
      tap( res => {
        this.setLoginInStorage(res.data);
        this.router.navigate(['/']);
      }),
      catchError( error => {
        console.error(error);
        return of();
      })
      )
  }
  register(data: User): Observable<any> {
    return this.setHttp('register', data);
  }
  login(data: User): Observable<any> {
    return this.setHttp('login', data);
  }
  logout() {
    window.localStorage.removeItem(AUTH_NAME);
    this.router.navigate(['/']);
  }
}
