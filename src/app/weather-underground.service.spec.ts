/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WeatherUndergroundService } from './weather-underground.service';

describe('WeatherUndergroundService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherUndergroundService]
    });
  });

  it('should ...', inject([WeatherUndergroundService], (service: WeatherUndergroundService) => {
    expect(service).toBeTruthy();
  }));
});
