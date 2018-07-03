import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopoComponent } from './topo/topo.component';

import { WeatherService } from './service/weather.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopoComponent

  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }