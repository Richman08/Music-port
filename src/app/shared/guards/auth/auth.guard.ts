import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.auth.currentUserValue;
    if (currentUser) {
        return true;
    }

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }







  // canActivate(next: any, state: any): Observable<boolean> {
  //   return this.auth.user$.pipe(
  //     take(1),
  //     map(user => !!user),
  //     tap(loggedIn => {                                        //  for auth with google
  //       if(!loggedIn) {
  //         console.log('access denied');
  //         this.router.navigate(['/login']);
  //       } 
  //     })
  //   );
  // }


} 
