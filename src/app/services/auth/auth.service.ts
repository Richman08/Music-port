import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable, BehaviorSubject } from 'rxjs';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  get isLoggedIn() {
    return this.loggedIn.asObservable(); 
  };
  currentUser = firebase.auth().currentUser;
  
  
  constructor( public aFAuth: AngularFireAuth, private router: Router, private db: AngularFireDatabase) {
    this.user$ = aFAuth.authState;
  }

   loginWithGoogle(){
     const PROVIDER = new firebase.auth.GoogleAuthProvider();
     this.aFAuth.auth.signInWithPopup(PROVIDER)
     this.loggedIn.next(true);
     console.log('currentUser', firebase.auth().currentUser.uid)
  }

  setUserData() {
    const DATA = {
      name: "this.currentUser.displayName",
    }
    this.db.object('users/12').set(DATA)
    .catch((err) => {
      console.log(err)
    })
  }
  
  logout() {
    this.aFAuth.auth.signOut();
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
   }
}  
