import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SlidesService } from './slides.service';
import { ISlide } from './slide';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'hs-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent implements OnInit {

  areaChose = false;
  slideIndex: number;
  slides = [];
  areasChecked = [];
  currentSlide: ISlide;
  className: string;
  playButtonClass: string;
  private _keypress: Subscription;
  
  buttonDisabled: string = "btn btn-primary btn-lg btn-block disabled";
  buttonActive: string = "btn btn-primary btn-lg btn-block active";
  
  @Output() areaChosenEvent = new EventEmitter<any>();

  constructor(private _slidesService: SlidesService) {
    this._keypress = Observable.fromEvent(document, 'keyup')
      .subscribe((e: KeyboardEvent) => {
        switch (e.keyCode) {
          case 37: //left
            this.plusSlides(-1)
            break;
          case 39: // right
            this.plusSlides(1)
            break;
        }
      });
  }

  ngOnInit() {
    this.slideIndex = 0;
    this.slides = this._slidesService.getSlides();
    this.currentSlide = this.slides[0];
    for (let i = 0; i < this.currentSlide.areas.length; i++) {
      this.areasChecked[i] = false;
    }
    
    this.playButtonClass = this.buttonDisabled;
  }

  plusSlides(n: number) {
    let sum = this.slideIndex + n;
    if (sum > this.slides.length - 1) { this.slideIndex = 0 }
    else if (sum < 0) { this.slideIndex = this.slides.length - 1 }
    else { this.slideIndex = sum }
    this.currentSlide = this.slides[this.slideIndex];
  }

  switchSlide(n: number) {
    this.slideIndex = n;
    this.currentSlide = this.slides[n];
  }

  ngOnDestroy(): void {
    this._keypress.unsubscribe();
  }

 
  playClicked() {
    if (this.areaChose) {
            this.areaChosenEvent.emit({ cs: this.currentSlide, ac: this.areasChecked });
    }
  }
}
