import { Component } from '@angular/core';
import { WeatherUndergroundService } from './weather-underground.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  public localWeather: JSON;

  constructor(private weatherService: WeatherUndergroundService){}

  getHoustonWeather(){
    this.weatherService.getConditions()
      .subscribe(res => {
        console.log(res);
      })
  }

}
