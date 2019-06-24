import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { REPUTABLE_URL } from 'src/app/app.constans';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(user) {
    this.http.post(REPUTABLE_URL + '/auth/register', user);
  }

  delete(id) {
    return this.http.delete(REPUTABLE_URL + '/users/me');
  }
}
