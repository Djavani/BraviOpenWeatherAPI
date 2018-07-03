import { Weather } from './../model/weather.model';
import { Http, Response } from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class WeatherService {

//https://openweathermap.org/appid
//http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}
//api.openweathermap.org/data/2.5/weather?q={city name}

private BASIC_URL: 'api.openweathermap.org/data/2.5/weather';
private API_KEY: '3cdcca362248894b2104aa60a5d312af';



  constructor(
    private http: Http,
    private httpClient: HttpClient) { }

  //http://api.openweathermap.org/data/2.5/weather?q=Juiz%20de%20Fora&APPID=3cdcca362248894b2104aa60a5d312af
  public getClimaCidade(cidade: string): Observable<Weather> {
    if(cidade){
      return this.http.get('api.openweathermap.org/data/2.5/weather?q=Juiz%20de%20Fora&APPID=3cdcca362248894b2104aa60a5d312af')
      //return this.http.get(`${this.BASIC_URL}?q=${cidade}&APPID=${this.API_KEY}`)
      .map((resposta: Response) => <Weather>resposta.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
    }
  }

  public getClimaCidade2(cidade: string) {
    debugger
    if (cidade) {
      return this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?q=Juiz%20de%20Fora&APPID=3cdcca362248894b2104aa60a5d312af');
      //return this.httpClient.get(`${this.BASIC_URL}?q=${cidade}&APPID=3cdcca362248894b2104aa60a5d312af`);
    }
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
}
}
