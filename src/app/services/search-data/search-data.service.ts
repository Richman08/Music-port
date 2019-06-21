import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITUNES_SEARCH_URL } from '../../app.constans';

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {

  constructor(private http: HttpClient) {}

  search(data: any) {
    return this.http.get(ITUNES_SEARCH_URL + `?term=${data}&media=music&limit=10` )
  }
} 
 