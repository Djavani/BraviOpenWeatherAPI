import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Weather } from './../model/weather.model';
import { WeatherService } from './../service/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cidade = '';
  private weather: Weather;

  constructor(private weatherService: WeatherService ) { }

  ngOnInit() {
  }

  public pesquisarCidade(): void {
    this.weatherService.getClimaCidade2(this.cidade)
      .subscribe((data: Weather) => this.weather = data,
    error => console.log(error));
  }

}
