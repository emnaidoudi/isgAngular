import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',  // so that we can use <app-nav></app-nav> tag  COOL!
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  appTitle : string = "Tounes il khadhra"
  constructor() { }

  ngOnInit() {
  }

}
