import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean{
    if (this.authService.isLogin()) {
      return true
    }
    this.router.navigate(['/auth/connectez-vous']);
    return false
  }
  
}
