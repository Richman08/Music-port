import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  user$: Observable<User>;
  _userAvatar = '';
  // public obsUserAvatar: BehaviorSubject<string> = new BehaviorSubject<string>(this._userAvatar); 
  
  constructor( private afAuth: AngularFireAuth, private router: Router, private afs: AngularFirestore) {
    this.user$ = this.afAuth.authState.pipe(
        switchMap(user => user ? this.afs.doc<User>(`users/${user.uid}`).valueChanges() : of(null)
        )
    )
  };

  ngOnInit() {
    console.log(this.afAuth.user)

  }

  getUserAvatarUrl(): string {
    return this._userAvatar;
  }

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
    this._userAvatar = data.photoURL;
    console.log('_userAvatar', this._userAvatar)
    return userRef.set(data, {merge: true});
  }
}  

