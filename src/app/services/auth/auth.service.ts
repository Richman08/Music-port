import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constans';
import { HeadersService } from 'src/app/services/headers/headers.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // user$: Observable<User>;    // for google auth

  constructor(private http: HttpClient,
              private headers: HeadersService) {
    // this.user$ = this.afAuth.authState.pipe(
    //     switchMap(user => user ? this.afs.doc<User>(`users/${user.uid}`).valueChanges() : of(null)    // for auth with google
    //     )
    // )
  }

  register(user) {
    return this.http.post(API_URL + '/auth/register', user, this.headers.setHeaders(false));
  }

  login(user) {
    return this.http.post(API_URL + '/auth/login',  user, this.headers.setHeaders(false));
  }

  logout() {
    return this.http.get(API_URL + '/logout');
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

