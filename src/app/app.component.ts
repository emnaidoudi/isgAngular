import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBxZzgeF1jqqU2__jz4viM3d_WkrTAlrII",
      authDomain: "soa-project-6bd4c.firebaseapp.com"
    })
  }
  title = 'soaProject';
}
