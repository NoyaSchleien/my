import { Component, OnInit, Output, EventEmitter, HostListener, ElementRef, Renderer } from '@angular/core';
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
  op:number;
  areaChose:boolean;
  numOfClicks:number;
  slideIndex: number;
  slides = [];
  areasChecked = [];
  playingMedia:boolean;
  areaDisabled:boolean;

  currentSlide: ISlide;
  className: string;
  private _keypress: Subscription;

  cameraIcon: string;
  cameraRegularIcon: string = "../assets/icons/camera.svg";
  cameraCheckedIcon: string = "../assets/icons/cameraChecked.png";
  microphoneIcon: string;
  microphoneRegularIcon: string = "../assets/icons/microphone.svg";
  microphoneCheckedIcon: string = "../assets/icons/microphoneChecked.png";

  @Output() areaChosenEvent = new EventEmitter<any>();

  constructor(private _slidesService: SlidesService, private el: ElementRef, private renderer: Renderer) {
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
    this.areaChose = false;
    this.op = 0;
    this.numOfClicks = 0;
    this.playingMedia = false;
    this.areaDisabled = false;

    for (let i = 0; i < this.currentSlide.areas.length; i++) {
      this.areasChecked[i] = false;
    }
    this.cameraIcon = this.cameraRegularIcon;
    this.microphoneIcon = this.microphoneRegularIcon;
  }

  plusSlides(n: number) {
    if(this.numOfClicks==0){
    let sum = this.slideIndex + n;
    this.ngOnInit(); 
    if (sum > this.slides.length - 1) { this.slideIndex = 0 }
    else if (sum < 0) { this.slideIndex = this.slides.length - 1 }
    else { this.slideIndex = sum }
    this.currentSlide = this.slides[this.slideIndex];
    }  }
  
  switchSlide(n: number) {
    if(this.numOfClicks==0){
    this.ngOnInit(); 
    this.slideIndex = n;
    this.currentSlide = this.slides[n];
    }}

  ngOnDestroy(): void {
    this._keypress.unsubscribe();
  }

  chooseArea(i: number) {
    let camerasChecked = this.currentSlide.areas[i].areaCameras;
    let microphonesChecked = this.currentSlide.areas[i].areaMicrophones;

    if (this.areasChecked[i] == false) {
      this.areasChecked[i] = true;
      this.areaChose = true;
      for (let camera of camerasChecked) {
        let img = document.getElementById("camera" + camera) as HTMLImageElement;
        img.src = this.cameraCheckedIcon;
      }
      for (let mic of microphonesChecked) {
        let img = document.getElementById("microphone" + mic) as HTMLImageElement;
        img.src = this.microphoneCheckedIcon;
      }
    }
    else {
      this.areasChecked[i] = false;
      for (let camera of camerasChecked) {
        let img = document.getElementById("camera" + camera) as HTMLImageElement;
        img.src = this.cameraRegularIcon;
      }
      for (let mic of microphonesChecked) {
        let img = document.getElementById("microphone" + mic) as HTMLImageElement;
        img.src = this.microphoneRegularIcon;
      }
      for (let i = 0; i < this.areasChecked.length; i++) {
        if (this.areasChecked[i]) {
          this.areaChose = true;
          break;
        }
        else if (i == this.areasChecked.length - 1) {
          this.areaChose = false;
        }
      }
    }
  }
  showArea(i: number) {
    let camerasChecked = this.currentSlide.areas[i].areaCameras;
    let microphonesChecked = this.currentSlide.areas[i].areaMicrophones;

    for (let camera of camerasChecked) {
      let img = document.getElementById("camera" + camera) as HTMLImageElement;
      img.style.opacity = "1";
      let label = document.getElementById("cameraLabel" + camera) as HTMLLabelElement;
      label.style.opacity = "1";
    }

    for (let mic of microphonesChecked) {
      let img = document.getElementById("microphone" + mic) as HTMLImageElement;
      img.style.opacity = "1";
      let label = document.getElementById("microphoneLabel" + mic) as HTMLLabelElement;
      label.style.opacity = "1";
    }
  }

  hideArea(i: number) {
    let camerasChecked = this.currentSlide.areas[i].areaCameras;
    let microphonesChecked = this.currentSlide.areas[i].areaMicrophones;

    for (let camera of camerasChecked) {
      let img = document.getElementById("camera" + camera) as HTMLImageElement;
      let label = document.getElementById("cameraLabel" + camera) as HTMLLabelElement;

      if (this.areasChecked[i]) {
        img.style.opacity = "1";
        label.style.opacity = "1";
      } else {
        img.style.opacity = "0";
        label.style.opacity = "0";
      }
    }

    for (let mic of microphonesChecked) {
      let img = document.getElementById("microphone" + mic) as HTMLImageElement;
      let label = document.getElementById("microphoneLabel" + mic) as HTMLLabelElement;

      if (this.areasChecked[i]) {
        img.style.opacity = "1";
        label.style.opacity = "1";
      } else {
        img.style.opacity = "0";
        label.style.opacity = "0";
      }
    }
  }
  playClicked() {
    if (this.areaChose) {
      this.numOfClicks += 1;
      if (this.numOfClicks == 1) {
        this.areaChosenEvent.emit({ cs: this.currentSlide, ac: this.areasChecked });
        this.playingMedia = true;
        this.areaDisabled=true;
      }
      else if (this.numOfClicks == 2) {
        this.ngOnInit();
      }
    }
  }
}

