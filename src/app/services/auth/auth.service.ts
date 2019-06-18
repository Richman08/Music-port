import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  currentUser;
  
  constructor( private afAuth: AngularFireAuth, private router: Router, private afs: AngularFirestore) {
    this.user$ = this.afAuth.authState.pipe(
        switchMap(user => user ? this.afs.doc<User>(`users/${user.uid}`).valueChanges() : of(null)
        )
    )
  };

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    this.router.navigate(['/main'])
    return this.updateUserData(credential.user)
  };

  async signOut() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/login'])
  };

  private updateUserData({uid, email, displayName, photoURL}: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);

    const data = {
      uid,
      email,
      displayName,
      photoURL,
      
    };
    console.log(data.photoURL)
    return userRef.set(data, {merge: true});
  }
}  
