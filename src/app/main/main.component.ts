import { Component, OnInit } from '@angular/core';
import { SearchDataService } from '../services/search-data/search-data.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  searchForm = new FormGroup({
    searchField: new FormControl()
  });
  response: Array<any>;
  
  constructor(private searchDataService: SearchDataService) {}

  ngOnInit() { 
   
  }
  
  searchTrack(searchForm){
    this.searchDataService.search(searchForm)
    .subscribe(({results}: any) => {
      this.response = results;
      console.log(this.response);
      console.log(this.searchForm.controls.searchField.value)
    });
    // this.searchForm.reset();
  }

  
      

  

}
