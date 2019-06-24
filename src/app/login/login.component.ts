import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginUserForm: FormGroup;
  submitted = false;
  returnURl: string;
  error: string;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private route: ActivatedRoute) { 
    if(this.auth.currentUserValue) {
      this.router.navigate(['/']);
    }
  }
  ngOnInit() {
    this.loginUserForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required] 
    });

      this.returnURl = this.route.snapshot.queryParams['/returnURl'] || '/';
    }
    
    // convenience getter for easy access to form fields
    get f() { return this.loginUserForm.controls; }
  
  onSubmit() {
    this.submitted = true;

    if(this.loginUserForm.invalid) {
      return; 
    };

    this.auth.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(data => {
        this.router.navigate([this.returnURl]);
      }),
      error => {
        this.error = error;
      }
  }



}
 