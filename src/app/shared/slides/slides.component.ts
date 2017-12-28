import { Component, OnInit, ViewChild } from '@angular/core';
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

  slideIndex: number;
  slides = [];
  camerasChecked = [];
  microphonesChecked = [];
  areasChecked = [];
  currentSlide: ISlide;
  className: string;
  private _keypress: Subscription;
  cameraIcon:string;
  cameraRegularIcon: string = "../assets/icons/camera.svg";
  cameraCheckedIcon: string = "../assets/icons/cameraChecked.png";
  

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
    this.cameraIcon=this.cameraRegularIcon;
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

  chooseArea(i: number) {
    this.camerasChecked=this.currentSlide.areas[i].areaCameras;
    this.microphonesChecked=this.currentSlide.areas[i].areaMicrophones;
    if (this.areasChecked[i] == false) {
      this.areasChecked[i] = true;
      for (let camera of this.camerasChecked){
        console.log(camera);
        console.log(document.getElementById("camera"));
       
      //  document.getElementById("camera").src=this.cameraCheckedIcon;

      }
    }
    else {
      this.areasChecked[i] = false;
      console.log(document.getElementById("i"));

      }
    }}
      
