import { Component, OnInit } from '@angular/core';
import { SlidesService } from './slides.service';
import { ISlide } from './slide';

@Component({
  selector: 'hs-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent implements OnInit {

  slideIndex: number = 0;
  slides = [];
  currentSlide:ISlide;

  constructor(private _slidesService: SlidesService) { }

  ngOnInit() {
    this.slides=this._slidesService.getSlides();
    this.currentSlide=this.slides[0];
  }

  plusSlides(n: number) {
    let sum= this.slideIndex+n; 
    if (sum > this.slides.length-1) { this.slideIndex = 0 }
    else if (sum < 0) { this.slideIndex = this.slides.length-1 }
    else {this.slideIndex=sum}
    this.currentSlide = this.slides[this.slideIndex];
  }

  switchSlide(n) {
    this.slideIndex = n;
    this.currentSlide=this.slides[n];
  }

}
