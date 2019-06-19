import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AuthService } from '../services/auth/auth.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {
  userProfileForm: FormGroup;
  selectedAvatar: any = {};
  user: any;

  constructor(private fb: FormBuilder, private auth: AuthService, private afAuth: AngularFireAuth) { 
    this.userProfileForm = this.fb.group({
      userName: [''],
      userLastName: [''],
      country: [''],
      city: ['']
    })
  };
  
  ngOnInit() {
    this.auth.user$.subscribe((res) => {
      this.user = res;
    })
  }
  
  chooseUserAvatar(event) {
    this.selectedAvatar = event.target.files[0];
    console.log(this.selectedAvatar)
  }
  
  uploadAvatar() {
    let storageRef = firebase.storage().ref('/userAvatar/' + this.selectedAvatar.name);
    let uploadTask = storageRef.put(this.selectedAvatar) 
    uploadTask.on('state_changed', snapshot => {
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes * 100) ;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED:
          break;
          case firebase.storage.TaskState.RUNNING: 
          break;
        }
      }, err => console.log(err),
      function() {
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          
      });
    });
  }

  //   getDownloadURL() {
  //     let storageRef = firebase.storage().ref().child("/userAvatar/");
  //     storageRef.getDownloadURL().then(url => {
  //       this.userAvatar = url;
  //       console.log('url', url);
  //       console.log('this.userAvatar', this.userAvatar);
  //     });
      


    

  //   from(storageRef.child(this.userAvatar).getDownloadURL())
  //     .subscribe(downloadURL => {
  //         this.userAvatar = downloadURL;
  //       });
  //   this.uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {

  //   });
    
  // }
  

}  
