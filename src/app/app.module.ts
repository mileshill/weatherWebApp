import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Services
import { WeatherUndergroundService } from './weather-underground.service';

// Components
import { WeatherComponent } from './shared/weather/weather.component';
import { SettingsComponent } from './shared/settings/settings.component';

// Routing
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [WeatherUndergroundService],
  bootstrap: [AppComponent]
})
export class AppModule { }
