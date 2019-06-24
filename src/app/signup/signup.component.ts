import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { group } from '@angular/animations';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { RegisterService } from '../services/auth/register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  signupUserForm: FormGroup;
  submitted = false;
  error: string;
  
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private registerService: RegisterService) { 
    if (this.auth.currentUserValue) {
      this.router.navigate(['/']);
    }
  }
  
  ngOnInit() {
    this.signupUserForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
    })
  }

  get f() { return this.signupUserForm.controls; }

    onSubmit() {
      this.submitted = true;
      if (this.signupUserForm.invalid) {
          return;
      }

      this.registerService.register(this.signupUserForm.value)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate(['/login'], { queryParams: { registered: true }});
            },
            error => {
                this.error = error;
            });
    }

}
