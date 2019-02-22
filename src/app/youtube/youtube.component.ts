import { SpringBootServicesService } from 'src/app/spring-boot-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  customers :Object;

  constructor(private data :SpringBootServicesService) { }

  ngOnInit() {
  }

  getCustomers(){
    this.data.getCustomers().subscribe(d=>{
      this.customers=d
      console.log(this.customers)
    })      
  }

}
