import { Component, OnInit } from '@angular/core';
import { ISlide } from '../shared/slides/slide';
import { ICamera } from '../shared/slides/camera';
import { IMicrophone } from '../shared/slides/microphone';

@Component({
  selector: 'hs-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {

  areaChose: boolean;
  currentSlide: ISlide;
  areasChecked: boolean[];
  cameras: ICamera[];
  camerasId: number[];
  microphones: IMicrophone[];
  microphonesId: number[];

  constructor() { }
  ngOnInit() {
    this.areaChose = false;
    this.currentSlide = null;
    this.areasChecked = [];
    this.cameras = [];
    this.camerasId = [];
    this.microphones = [];
    this.microphonesId = [];
  }

  onPlayClicked(obj: any) {
    this.currentSlide = obj.cs;
    this.areasChecked = obj.ac;

    this.getMediaId();

    if (this.currentSlide) {
      this.areaChose = true;
    }

    this.setVideo();
    this.setAudio();
  }

  getMediaId() {
    for (let i = 0; i < this.areasChecked.length; i++) {
      if (this.areasChecked[i]) {
        for (let camId of this.currentSlide.areas[i].areaCameras) {
          this.camerasId.push(camId);
        }
        for (let micId of this.currentSlide.areas[i].areaMicrophones) {
          this.microphonesId.push(micId);
        }
      }
    }
  }

  setVideo() {
    this.cameras = [];
    for (let id of this.camerasId) {
      for (let camera of this.currentSlide.cameras) {
        if (camera.id == id) {
          this.cameras.push(camera);
        }
      }
    }
  }

  setAudio() {
    this.microphones = [];
    for (let id of this.microphonesId) {
      for (let microphone of this.currentSlide.microphones) {
        if (microphone.id == id) {
          this.microphones.push(microphone);
        }
      }
    }
  }
  onStopClicked() {
    this.ngOnInit();
  }
}