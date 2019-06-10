import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  constructor(private gAuth: AuthService) {}
  
  ngOnInit() {
    this.isLoggedIn$ = this.gAuth.isLoggedIn;
  }
 
  logout(){
    this.gAuth.logout();
  }
}
