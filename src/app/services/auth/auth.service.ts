import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable, BehaviorSubject } from 'rxjs';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable(); 
  }

  constructor(public gAuth: AngularFireAuth, private router: Router) {
    this.user = gAuth.authState;
   }

   loginWithGoole(){
     const provider = new firebase.auth.GoogleAuthProvider();
     this.gAuth.auth.signInWithPopup(provider)
     this.loggedIn.next(true);
        // this.router.navigate(['/'])
    }
    
    logout() {
      this.gAuth.auth.signOut();
      this.loggedIn.next(false);
      this.router.navigate(['/login']);
   }
}
