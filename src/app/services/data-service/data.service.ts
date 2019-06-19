import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public _trackUrl: string = '';
  public obsvTrackUrl: BehaviorSubject<string> = new BehaviorSubject<string>(this._trackUrl);

  constructor() { }
  
  getTrackUrl(): string {
    return this._trackUrl;
  }
  
  setTrackUrl(trackUrl: string): void {
    this._trackUrl = trackUrl;
    this.obsvTrackUrl.next(this._trackUrl);
  }
  
} 