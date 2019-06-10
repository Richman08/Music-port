import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {

  userProfile: FormGroup;
  lat: string = "";
  lng: string = "";
  countryName: string = "{{ countryName }}";
  cityName: string = "";
  location: Object;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userProfile = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      countryName: new FormControl(),
      cityName: new FormControl()
    })
  }

  // this.userProfile.valueChanges.subscribe(value => console.log(value))

    // this.map.getLocation().subscribe(data => {
    //   console.log(data);
    //   this.lat = data.latitude;
    //   this.lng = data.longitude;
    //   this.countryName = data.countryName;
    //   this.cityName = data.cityName;
    // });

    // const observable = interval(1000);
    // console.log(observable)
    // const observer = {next: (value => console.log(value))};
  
    // observable.pipe(
    //   map(value => "Number: " + Math.floor(Math.random() * 1000)),
    //   throttleTime(2000)
    // ).subscribe(observer);

}
