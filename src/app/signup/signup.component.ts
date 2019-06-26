import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  signupUserForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router ) {}

  ngOnInit() {
    this.signupUserForm = this.fb.group({
      first_name: ['', Validators.required],
      gender: [''],
      birth: [''],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
    });
  }

  onSubmit(data) {
    this.auth.register(data).subscribe(resp => {
      this.router.navigate(['/login']);
    }, err => {
      console.error('err', err);
    });
  }
}
