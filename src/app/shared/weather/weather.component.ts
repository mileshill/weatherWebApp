import { Component, OnInit } from '@angular/core';
import { WeatherUndergroundService } from '../../weather-underground.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  private weather: any;
  private searchStr: string;
  private results: any;
  private zmw: string;

  constructor(private weatherService: WeatherUndergroundService) {}

  ngOnInit() {
    this.getDefaultCity()

    this.weatherService.getWeather(this.zmw)
      .subscribe(weather => {
        this.weather = weather.current_observation;
      })

    
  }

  // Service call to Weather API
  // Accepts location object and queries 
  // using the city zmw
  getWeather(location){
    this.weatherService.getWeather(location.zmw)
      .subscribe(weather => {
        this.weather = weather;
      })
  }

  // Called on `keyup` events in `input`
  // Returns array of city objects matching input
  getQuery(){
    this.weatherService.searchCities(this.searchStr)
      .subscribe(res => {
        this.results = res.RESULTS;
      })
  }

  // Initializes Houston, TX as default city
  getDefaultCity(){
    this.zmw = '77001.1.99999'; // Houston, Tx
  }

  // Invoked on `click` events after user city search.
  // Result.zmw used to update location
  setLocation(result){
    this.zmw = result.zmw;
    this.results = null;
    
    this.weatherService.getWeather(this.zmw)
      .subscribe(weather => {
        this.weather = weather.current_observation;
      })
  }

}
