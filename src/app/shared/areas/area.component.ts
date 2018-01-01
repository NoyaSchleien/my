import { Component, OnInit, Input } from '@angular/core';
import { IArea } from '../slides/area';

@Component({
  selector: 'hs-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  @Input() area: IArea;
  cameraIcon: string;
  cameraRegularIcon: string = "../assets/icons/camera.svg";
  cameraCheckedIcon: string = "../assets/icons/cameraChecked.png";
  microphoneIcon: string;
  microphoneRegularIcon: string = "../assets/icons/microphone.svg";
  microphoneCheckedIcon: string = "../assets/icons/microphoneChecked.png";
  cameras = [];
  microphones = [];
  areaChecked: boolean;


  constructor() {
  }

  ngOnInit() {
    this.cameraIcon = this.cameraRegularIcon;
    this.microphoneIcon = this.microphoneRegularIcon;
    this.cameras = this.area.areaCameras;
    this.microphones = this.area.areaMicrophones;
    this.areaChecked = false;
  }

  chooseArea(i: number) {
    if (this.areaChecked == false) {
      this.areaChecked = true;
      // this.areaChose = true;
      for (let camera of this.cameras) {
        let img = document.getElementById("camera" + camera) as HTMLImageElement;
        img.src = this.cameraCheckedIcon;
      }
      for (let mic of this.microphones) {
        let img = document.getElementById("microphone" + mic) as HTMLImageElement;
        img.src = this.microphoneCheckedIcon;
      }
      // this.playButtonClass = this.buttonActive;
    }
    else {
      this.areaChecked = false;
      for (let camera of this.cameras) {
        let img = document.getElementById("camera" + camera) as HTMLImageElement;
        img.src = this.cameraRegularIcon;
      }
      for (let mic of this.microphones) {
        let img = document.getElementById("microphone" + mic) as HTMLImageElement;
        img.src = this.microphoneRegularIcon;
      }
      // for (let i = 0; i < this.areasChecked.length; i++) {
      //   if (this.areasChecked[i]) {
      //     this.areaChose = true;
      //     break;
      //   }
      //   else if (i == this.areasChecked.length - 1) {
      //     this.playButtonClass = this.buttonDisabled;
      //     this.areaChose = false;
      //   }
      // }
    }
  }


}
