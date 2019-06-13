import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  // constructor(
  //   private authService: AuthService,
  //   private router: Router
  // ) {}

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean> {
  //   return this.authService.isLoggedIn        
  //     .pipe(
  //       take(1),                            
  //       map((isLoggedIn: boolean) => {        
  //         if (!isLoggedIn){
  //           this.router.navigate(['/main']);  
  //           return false;
  //         }
  //         return true;
  //       })
  //     )
  // }
}
