import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GET_URL } from '../../app.constans';

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {

  constructor(private http: HttpClient) {}

  search(data: any) {
    return this.http.get(GET_URL + `?term=${data}&limit=10` )
  }
}
