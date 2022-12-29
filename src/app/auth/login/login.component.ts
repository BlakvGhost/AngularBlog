import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  data: User = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: ''
  };
  message: string|boolean = false;
  success: boolean;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  login(state: boolean|null) {

    if (!state) {
      this.message = `Erreur, veillez remplir tout les champs`;
      return this.success = !1;    
    }

    this.success = true;
    this.message = `Tentative de connexion en cours...`;
    
    return this.auth.login(this.data).subscribe( res => {
      this.success = res.success;
      this.message = res.message;
    });
  }

}
