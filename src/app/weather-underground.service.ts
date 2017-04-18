import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherUndergroundService {
  private apikey: String = '50f6ae31331bce3b';
  private apiurl: String = 'http://api.wunderground.com/api/'+this.apikey+'/';

  constructor(private http: Http) { }



  getConditions(){
    return this.http.get(this.apiurl+'conditions/q/TX/Houston.json')
      .map(res => res.json())
  }


}
