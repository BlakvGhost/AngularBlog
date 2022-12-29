import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent implements OnInit {

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


  register(state: boolean|null) {

    if (!state) {
      this.message = `Erreur, veillez remplir tout les champs`;
      return this.success = !1;    
    }

    if (this.data.confirm_password !== this.data.password) {
      this.message = `Erreur, Les Deux mots de Passe ne sont pas conforme`;
      return this.success = !1;
    }

    this.success = true;
    this.message = `Tentative de creation de votre compte en cours...`;
    
    return this.auth.register(this.data).subscribe( res => {
      this.success = res.success;
      this.message = res.message;
    });

  }
}
