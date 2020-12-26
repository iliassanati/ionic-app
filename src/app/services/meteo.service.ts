import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MeteoService {
  constructor(private httpClient: HttpClient) {}

  public getMeteoData(city: string) {
    return this.httpClient.get(
      'http://api.openweathermap.org/data/2.5/forecast?q=' +
        city +
        '&APPID=5590b04b6ecd07dcbf997737f8693b8c'
    );
  }
}
