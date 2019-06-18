import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {
  userProfileForm: FormGroup;
  selectedAvatar;

  // lat: string = "";
  // lng: string = "";
  // countryName: string = "{{ countryName }}";

  // location: Object;
  
  constructor(private fb: FormBuilder, private http: HttpClient) { 
    this.userProfileForm = this.fb.group({
      userName: [''],
      userLastName: [''],
      country: [''],
      city: ['']
    })
  }
 
  ngOnInit() {
  }

  chooseUserAvatar(event) {
    console.log(event)
    this.selectedAvatar = event.target.files[0];
  }

  uploadAvatar() {
    let storageRef = firebase.storage().ref('/userAvatar/' + this.selectedAvatar.name);
    let uploadTask = storageRef.put(this.selectedAvatar) 
    uploadTask.on('state_changed', function(snapshot){
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes * 100) ;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    }, function(error) {
      // Handle unsuccessful uploads
    }, function() {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => console.log('File available at', downloadURL));
    });
  }

  // uploadAvatar() {
  //   const FD = new FormData();
  //   FD.append('image', this.selectedAvatar, this.selectedAvatar.name)
  //   this.http.post('', FD)
  //     .subscribe(res => {
  //       console.log(res);
  //     })
  // }















  // this.userProfile.valueChanges.subscribe(value => console.log(value))

    // this.map.getLocation().subscribe(data => {
    //   console.log(data);
    //   this.lat = data.latitude;
    //   this.lng = data.longitude;
    //   this.countryName = data.countryName;
    //   this.cityName = data.cityName;
    // });

    // const observable = interval(1000);
    // console.log(observable)
    // const observer = {next: (value => console.log(value))};
  
    // observable.pipe(
    //   map(value => "Number: " + Math.floor(Math.random() * 1000)),
    //   throttleTime(2000)
    // ).subscribe(observer);

} 
