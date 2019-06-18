import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AuthService } from '../services/auth/auth.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {
  userProfileForm: FormGroup;
  selectedAvatar;
  
  constructor(private fb: FormBuilder, private auth: AuthService) { 
    this.userProfileForm = this.fb.group({
      userName: [''],
      userLastName: [''],
      country: [''],
      city: ['']
    })
  };
 
  ngOnInit() {}

  chooseUserAvatar(event) {
    this.selectedAvatar = event.target.files[0];
    console.log(this.selectedAvatar)
  }

img

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
        this.img = downloadURL;
        console.log('File available at', downloadURL);
        
      });
    });
  }
}  
