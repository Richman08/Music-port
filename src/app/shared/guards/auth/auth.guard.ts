import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(
    private gAuth: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.gAuth.isLoggedIn        
      .pipe(
        take(1),                            
        map((isLoggedIn: boolean) => {        
          if (!isLoggedIn){
            this.router.navigate(['/login']);  
            return false;
          }
          return true;
        })
      )
  }
} 
