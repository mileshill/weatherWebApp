import { Component, OnInit } from '@angular/core';
import { WeatherUndergroundService } from '../../weather-underground.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  private city: string;
  private state: string;
  private weather: any;
  private searchStr: string;
  private results: any;

  constructor(private weatherService: WeatherUndergroundService) {
    this.city = 'Houston';
    this.state = 'TX';
   }

  ngOnInit() {
    this.weatherService.getWeather(this.city, this.state)
      .subscribe(weather => {
        this.weather = weather.current_observation;
        console.log(weather.current_observation);
      })

    
  }

  getWeather(city, state){
    this.weatherService.getWeather(city, state)
      .subscribe(weather => {
        this.weather = weather;
      })
  }

  getQuery(){
    this.weatherService.searchCities(this.searchStr)
      .subscribe(res => {
        this.results = res.RESULTS;
        console.log(res.RESULTS);
      })
  }

}
