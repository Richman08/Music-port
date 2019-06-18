import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private gAuth: AuthService, private router: Router) { }

  ngOnInit() {
    console.log(this.gAuth)
  }
  
  login() {
    this.gAuth.loginWithGoogle();
    this.gAuth.setUserData();
    this.gAuth.user$ ? this.router.navigate(['/main']) : null;
  }
}
 