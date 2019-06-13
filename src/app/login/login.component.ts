import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private gAuthService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.gAuthService.loginWithGoole();
    // if() {
        // this.router.navigate(['/main'])
    // }
  }
}
 