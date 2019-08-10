import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  current:ICurrentWeather
  constructor() { 
    this.current ={
      city:'Bothell',
      country:'US',
      date: new Date(),
      image:'',
      temperature: 72,
      description:'Weather now'
    }
  }

  ngOnInit() {
  }

}
