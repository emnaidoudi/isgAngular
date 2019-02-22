import { SpringBootServicesService } from 'src/app/spring-boot-services.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServicesService } from '../services.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private data: SpringBootServicesService , private router : Router) { }

  
  ngOnInit() {
  }

  onSignUp(form :NgForm){
    this.data.addCustomer(form.value);
     this.router.navigate(['/home']);
    /*const mail=form.value.email;
    const password=form.value.password;
    this.data.signinUser(mail,password);*/
  }


}
