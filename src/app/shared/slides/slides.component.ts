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
  private _keypress: Subscription;
  cameraIcon: string;
  cameraRegularIcon: string = "../assets/icons/camera.svg";
  cameraCheckedIcon: string = "../assets/icons/cameraChecked.png";
  microphoneIcon: string;
  microphoneRegularIcon: string = "../assets/icons/microphone.svg";
  microphoneCheckedIcon: string = "../assets/icons/microphoneChecked.png";
  playButtonClass: string;
  buttonDisabled: string = "btn btn-primary btn-lg btn-block disabled";
  buttonActive: string = "btn btn-primary btn-lg btn-block active";
  @Output() mediaTableEvent = new EventEmitter<any>();

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
    this.cameraIcon = this.cameraRegularIcon;
    this.microphoneIcon = this.microphoneRegularIcon;
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
      this.playButtonClass = this.buttonActive;
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
          this.playButtonClass = this.buttonDisabled;
          this.areaChose = false;
        }
      }
    }
  }
  playClicked() {
    if (this.areaChose) {
      this.mediaTableEvent.emit({ cs: this.currentSlide, ac: this.areasChecked });
    }
  }
}
