import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  zoomAnimation:string;
  constructor() { }

  ngOnInit() {
  }
  zoom(){
  this.zoomAnimation="w3-animate-zoom";
}
}
