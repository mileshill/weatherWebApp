import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SettingsComponent } from './shared/settings/settings.component';
import { WeatherComponent } from './shared/weather/weather.component';


// Route Configuration
export const routes: Routes = [
    {path: 'settings', component: SettingsComponent},
    {path: '', redirectTo: '/weather', pathMatch: 'full'},
    {path: 'weather', component: WeatherComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
