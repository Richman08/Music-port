import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Observable } from 'rxjs';
import { UploadImgService } from '../services/storage/upload-img.service';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.constans';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {
  userProfileForm: FormGroup;
  selectedAvatar: File = null;
  currUserAvatar: string = 'test'

  constructor(private fb: FormBuilder, private auth: AuthService, private uploadImgService: UploadImgService, private http: HttpClient) { 
    this.userProfileForm = this.fb.group({
      userName: [''],
      userLastName: [''],
      country: [''],
      city: ['']
    })
  };
  
  ngOnInit() {}
  
  chooseUserAvatar(event) {
    // this.selectedAvatar = <File>event.target.files[0];
    // console.log('this.selectedAvatar', this.selectedAvatar)
  }
  
  uploadAvatar() {
    // const fd = new FormData();
    // fd.append('avatar', this.selectedAvatar, this.selectedAvatar.name)
    // this.http.post(REPUTABLE_URL + '/users/avatar', fd)
    // .subscribe(resp => {
    //   console.log(resp)
    // });
  }
  

}  
