import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Album {
  albumCover: string;
  trackName: string;
  actorName: string;
  trackDuration: number;
}

const getUrl = 'https://api.musixmatch.com/ws/1.1';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': '5dbf3b6c5e2a684cd521c1ceb27e8b3d'
  })
};
@Injectable({
  providedIn: 'root'
})
export class MainListService {

  
  constructor(private http: HttpClient) {}
  search(){
    this.http.get(getUrl + '/album.tracks.get' + httpOptions )
      .subscribe(response => {
        console.log(response)
      })
  }
}
 