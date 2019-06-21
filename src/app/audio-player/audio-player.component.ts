import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service/data.service';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.sass']
})
export class AudioPlayerComponent implements OnInit {

  msbapTitle = 'Audio Title';
  msbapAudioUrl: string = '';   

  msbapDisplayTitle = false; 

  constructor(private dataService: DataService, private auth: AuthService) { }

  ngOnInit() {
    this.dataService.obsvTrackUrl.subscribe(result => {
      this.msbapAudioUrl = result
    });
    }
}
