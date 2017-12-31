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

  onAreaChosen(currentSlide: ISlide, areasChecked: Array<Boolean>) {
    this.currentSlide = currentSlide;
    this.areasChecked = areasChecked;
    console.log(this.currentSlide);
    console.log(this.areasChecked);
    for (let i = 0; i < this.areasChecked.length; i++) {
      if (this.areasChecked[i]) {
        this.cameras.push(this.currentSlide.areas[i].areaCameras);
        this.microphones.push(this.currentSlide.areas[i].areaMicrophones);
      }
    }
    console.log(this.cameras);
    console.log(this.microphones);
    if (this.currentSlide) {
      this.areaChose = true;
    }
  }
}
