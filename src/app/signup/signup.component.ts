import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { group } from '@angular/animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  signupUserForm: FormGroup;
  
  constructor(private fb: FormBuilder) { 
    this.signupUserForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(6), Validators.maxLength(16)],
    })
  }

  ngOnInit() {
  }

  signup() {

  }

}
