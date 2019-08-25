import {IWeatherService} from './weather.service';
import {ICurrentWeather} from '../icurrent-weather';
import {of} from 'rxjs';


export class WeatherServiceFake implements IWeatherService{
  private fakeWeather: ICurrentWeather ={
    city: 'Bursa',
    country: 'TR',
    date: 1487589060,
    image:'',
    temperature:280.32,
    description:'drizzle'
  }


  public getCurrentWeather(search: string|number, country?:string){
    return of (this.fakeWeather);
  }
}

