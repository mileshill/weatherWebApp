import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherUndergroundService {
  private http: any;
  private apiKey: string;
  private conditionsUrl: string;
  private searchUrl: string;

  constructor(http: Http) {
    this.http = http; 
    this.apiKey = '50f6ae31331bce3b';
    this.conditionsUrl = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
    this.searchUrl = 'http://localhost:4200/api/aq?query=';
}


  getWeather(city: string, state: string){
    return this.http.get(this.conditionsUrl +'/'+ state +'/'+ city +'.json')
      .map(res => res.json())
  }

  searchCities(searchStr: string){
    return this.http.get(this.searchUrl + searchStr)
      .map(res => res.json())
  }
  

}
