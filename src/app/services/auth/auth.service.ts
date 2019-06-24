import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { switchMap, map } from 'rxjs/operators';
import { User } from './user.interface';
import { HttpClient } from '@angular/common/http';
import { REPUTABLE_URL } from 'src/app/app.constans';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  // user$: Observable<User>;    // for google auth
  currentUser: Observable<any>;
  
  constructor(private http: HttpClient, private afAuth: AngularFireAuth, private router: Router, private afs: AngularFirestore) {

    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

    // this.user$ = this.afAuth.authState.pipe(
    //     switchMap(user => user ? this.afs.doc<User>(`users/${user.uid}`).valueChanges() : of(null)    // for auth with google
    //     )
    // )
  }; 

  public get currentUserValue() {
    return this.currentUserSubject.value;
}

  login(username, password) {
    return this.http.post<any>(REPUTABLE_URL + '/auth/login', { username, password })
      .pipe(
        map(user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
      }));
  }

  logout() {
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }


  // async googleSignin() {
  //   const provider = new auth.GoogleAuthProvider();
  //   provider.setCustomParameters({
  //     prompt: 'select_account'
  //   });
  //   const credential = await this.afAuth.auth.signInWithPopup(provider);
  //   this.router.navigate(['/main'])
  //   return this.updateUserData(credential.user)
  // };

  // async signOut() {
  //   await this.afAuth.auth.signOut();
  //   return this.router.navigate(['/login'])                                                   // for auth with google
  // };

  // private updateUserData({uid, email, displayName, photoURL}: User) {
  //   const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);

  //   const data = {
  //     uid,
  //     email,
  //     displayName,
  //     photoURL,  
  //   };
  //   return userRef.set(data, {merge: true});
  // }
}  

