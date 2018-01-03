import { Component, OnInit } from '@angular/core';
import { ISlide } from '../shared/slides/slide';

@Component({
  selector: 'hs-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {

  areaChose = false;
  currentSlide: ISlide;
  areasChecked = [];
  cameras = [];
  microphones = [];

  constructor() { }
  ngOnInit() {
  }

  onAreaChosen(obj: any) {
    this.currentSlide = obj.cs;
    this.areasChecked = obj.ac;
    for (let i = 0; i < this.areasChecked.length; i++) {
      if (this.areasChecked[i]) {
        this.cameras.push(this.currentSlide.areas[i].areaCameras);
        this.microphones.push(this.currentSlide.areas[i].areaMicrophones);
      }
    }
    if (this.currentSlide) {
      this.areaChose = true;
    }
    console.log("this.areaChose = "+this.areaChose);
    console.log("this.cameras = "+this.cameras);
    console.log("this.mic = "+this.microphones);
  }
}
