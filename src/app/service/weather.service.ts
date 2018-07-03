import { Weather } from './../model/weather.model';
import { Injectable, ErrorHandler } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable()
export class WeatherService {

  private BASIC_URL = 'http://api.openweathermap.org/data/2.5/weather';
  private API_KEY = '3cdcca362248894b2104aa60a5d312af';

  constructor(
    private http: HttpClient) { }

  public getClimaCidade(cidade: string): Observable<Weather[]> {
    return this.http.get<Weather[]>(`${this.BASIC_URL}?q=${cidade}&APPID=${this.API_KEY}`);
  }

}
