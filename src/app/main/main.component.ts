import { Component, OnInit } from '@angular/core';
import { SearchDataService } from '../services/search-data/search-data.service';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../services/data-service/data.service';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  searchForm;
  tracksArray: Array<any>;
  
  constructor(
              public fb: FormBuilder,
              private searchDataService: SearchDataService,
              private dataService: DataService,
              private auth: AuthService) {

      this.searchForm = this.fb.group({
        searchField: ['']
      })
  };

  ngOnInit() { 
  };
  
  searchTrack(searchForm) {
    this.searchDataService.search(searchForm)
    .subscribe(({results}: any) => {
      this.tracksArray = results;
    });
    this.searchForm.reset();
  } 

  playTrack(index: number) {
      this.dataService.setTrackUrl(this.tracksArray[index].previewUrl);
  }
  
      

  

}
