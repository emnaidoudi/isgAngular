import { SpringBootServicesService } from './../spring-boot-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  currentWeather: Object;
  imgUrl :string;
  constructor(private data : SpringBootServicesService) { }

  getWeather(){
    this.data.getWeather().subscribe(w=>{
      this.currentWeather=w;
      console.log("weather : "+this.currentWeather["weather"][0]["description"])
      this.imgUrl="http://openweathermap.org/img/w/"+this.currentWeather["weather"][0]["icon"]+".png";
      //console.log("temp"+this.currentWeather["main"]["temp_min"])
    })

     }
  
  ngOnInit() {
    this.getWeather();
  }

}
