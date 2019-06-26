import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit() {
  }
  isAuth() {
    return localStorage.getItem('REPUTABLE');
  }

  logout() {
    this.auth.logout().subscribe(resp => {
      localStorage.removeItem('REPUTABLE');
      this.router.navigate(['/login']);
    }, err => {
      console.error('error', err);
    });
  }
}
