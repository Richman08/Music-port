import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MainListService } from '../shared/services/main-list/main-list.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  trackInfo: FormGroup;
  albumId: string = '';
  response: any;

  constructor(private http: HttpClient, private mainList: MainListService) {}

  ngOnInit() {
   
  }
  
  
      

  

}
