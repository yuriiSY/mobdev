import { environment } from 'src/environments/environment';
import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http"

const API_KEY = environment.API_KEY;
const API_URL = environment.API_URL

interface WeatherResponse {
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  // Other properties from the response if needed
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weatherValues :any

  constructor(public httpClient: HttpClient) {
    this.loadData()
  }


  loadData() { 
    this.httpClient.get<WeatherResponse>(`${API_URL}/weather?q=${"Dublin"}&appid=${API_KEY}`).subscribe(result => {
      console.log(result);
      this.weatherValues = result.main
     });
  }
}
