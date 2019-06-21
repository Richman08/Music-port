import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginUserForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) { 
    this.loginUserForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }
  ngOnInit() {
  }
  

}
 