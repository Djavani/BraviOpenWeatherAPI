import { Component, OnInit } from '@angular/core';
import { Weather } from './../model/weather.model';
import { WeatherService } from './../service/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cidade = '';
  public formVisivel = false;
  private weather: Weather = new Weather();


  constructor(private weatherService: WeatherService ) { }

  ngOnInit() {

  }

  public getClimaCidade() {
    this.weatherService.getClimaCidade(this.cidade).subscribe(data => {
      debugger
      if(data) {
        this.formVisivel = true;
        this.weather[0] = data;
      }
    });
  }

}
