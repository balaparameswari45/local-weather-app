import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-citysearch',
  templateUrl: './citysearch.component.html',
  styleUrls: ['./citysearch.component.css']
})
export class CitysearchComponent implements OnInit {

  search  = new FormControl();

  constructor(private weatherservice:WeatherService) { }

  ngOnInit() {
    this.search.valueChanges.subscribe((searchValue: string) =>{
      const userInput=searchValue.split(',').map(s =>s.trim());
      this.weatherservice.getCurrentWeather(userInput[0],userInput.length>1 ?userInput[1]:undefined).subscribe(data =>console.log(data));
    })
  }

}
