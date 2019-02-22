import { Person } from 'src/classes/person';
import { SpringBootServicesService } from './../spring-boot-services.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  messageGroup: FormGroup;
  users :Object;
  boot :Object;
  parsouna :Person;

  constructor(private data:SpringBootServicesService) { 
  }

  onSubmit(){}

  setPerson(){
    this.data.getPerson().subscribe(d=>{
      this.parsouna=d
      console.log("yala "+this.parsouna.title);
    });
    
  }
  ngOnInit() {
    //subscribe : When the result is ready, we will be notified.
    this.data.getUsers().subscribe(d=>{
      this.users=d
      console.log(this.users)
    })
  
  }

  exploreServices(){
    this.data.yalaClick().subscribe(d=>{
      this.boot=d
      console.log(this.boot)
    })      
  }

  postService(title:HTMLInputElement){
    this.data.postUser(title);
    
  }

}
