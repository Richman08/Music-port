import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeadersService {

  constructor() { }

  setHeaders(auth) {
    let httpHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    });
    if (auth) {
      const { accessToken } = JSON.parse(localStorage.getItem('REPUTABLE'));
      httpHeaders = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': accessToken
      });
      return { headers: httpHeaders };
    }
  }
}
