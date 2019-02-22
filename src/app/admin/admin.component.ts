import { SpringBootServicesService } from './../spring-boot-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  clicked=false;
  customers :Object;
  constructor(private data :SpringBootServicesService) { }

  ngOnInit() {
  }


  getCustomers(){
    this.data.getCustomers().subscribe(d=>{
      this.customers=d
      console.log(this.customers)
      this.clicked=true;
    })      
  }

} 
