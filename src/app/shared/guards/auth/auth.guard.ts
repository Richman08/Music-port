import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(next: any, state: any): Observable<boolean> {
    return this.auth.user$.pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn => {
        if(!loggedIn) {
          console.log('access denied');
          this.router.navigate(['/login']);
        } 
      })
    );
  }


} 
