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
  private weather: Weather = new Weather();

  constructor(private weatherService: WeatherService ) { }

  ngOnInit() {

  }



  public getClimaCidade() {
    this.weatherService.getClimaCidade(this.cidade).subscribe(data => {
      console.log(data);
    });
  }

}
