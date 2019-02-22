import { Customer } from './customer';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from 'src/classes/person';
import { ServicesService } from './auth/services.service';

@Injectable({
  providedIn: 'root'
})
export class SpringBootServicesService {

  private url="https://reqres.in/api/users";
  private placeholderURL="https://jsonplaceholder.typicode.com/posts/1";//GET

  constructor(private http: HttpClient, private auth: ServicesService) { }
 
  getCustomers(){
    return this.http.get("http://localhost:4200/customers/all");
  }

  addCustomer(customer :Customer ){    
     this.http.post<Customer>("http://localhost:4200/customers/add",customer,
  {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }).subscribe(d=>{
      console.log("Good");
    });
  }


  /*postUser(input :HTMLInputElement){
    this.http.post("https://jsonplaceholder.typicode.com/posts/",
    {
        "title": input.value,
    })
    .subscribe(
        data => {
          
            console.log("POST Request is successful ", data);
        },
        error => {
            console.log("Error", error);
        }
    );  
  }*/

  getWeather(){
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q=tunis&units=metric&APPID=acf0a678438a992a21999196194f42c0");
  }
  
 /* ********* LEARNING **********   */
  fireBaseGet(){
    const token=this.auth.getToken();
    return this.http.get("https://soa-project-6bd4c.firebaseio.com/data.json?auth="+token);
  }


  getPerson(){
    return this.http.get<Person>(this.placeholderURL);
  }

  getUsers(){
    return this.http.get(this.url);
  }



  yalaClick(){
    return this.http.get("/toy/all");
  }

  postUser(input :HTMLInputElement){
    this.http.post("https://jsonplaceholder.typicode.com/posts/",
    {
        "title": input.value,
    })
    .subscribe(
        data => {
          
            console.log("POST Request is successful ", data);
        },
        error => {
            console.log("Error", error);
        }
    );  
  }


}
