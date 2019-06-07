import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MapsService } from '../shared/services/maps/maps.service'
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { map, tap, throttleTime, take } from 'rxjs/operators';
import { fromEvent, Observable, interval} from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  userProfile: FormGroup;
  lat: string = "";
  lng: string = "";
  countryName: string = "{{ countryName }}";
  cityName: string = "";
  location: Object;

  constructor(private map: MapsService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.userProfile = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      countryName: new FormControl(),
      cityName: new FormControl()
    })

    this.userProfile.valueChanges.subscribe(value => console.log(value))

    this.map.getLocation().subscribe(data => {
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
      this.countryName = data.countryName;
      this.cityName = data.cityName;
    });

    const observable = interval(1000);
    console.log(observable)
    const observer = {next: (value => console.log(value))};
  
    observable.pipe(
      map(value => "Number: " + Math.floor(Math.random() * 1000)),
      throttleTime(2000)
    ).subscribe(observer);
  }
      

  

}
