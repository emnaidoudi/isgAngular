import { ServicesService } from './../services.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SpringBootServicesService } from 'src/app/spring-boot-services.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  servers =[
    {
      name:"emna",
      age:"20"
    }
  ]
  constructor(private data: ServicesService) { }

  ngOnInit() {
  }

  /*save(){
    this.data.fireBasePost(this.servers).subscribe(response=>{
      console.log(response)
    })
  }*/
  onSignUp(form: NgForm){
    const mail=form.value.email;
    const password=form.value.password;
    this.data.signupUser(mail,password);
  }


}
