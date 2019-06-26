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

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }
  ngOnInit() {
    this.loginUserForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(data) {
    this.auth.login(data).subscribe(resp => {
      localStorage.setItem('REPUTABLE', JSON.stringify(resp));
      this.router.navigate(['/main']);
    }, err => {
      console.error('err', err);
    });
  }
}
