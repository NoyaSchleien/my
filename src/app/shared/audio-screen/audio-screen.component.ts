import { Component, OnInit, Input } from '@angular/core';
import { IMicrophone } from '../slides/microphone';

@Component({
  selector: 'hs-audio-screen',
  templateUrl: './audio-screen.component.html',
  styleUrls: ['./audio-screen.component.css']
})
export class AudioScreenComponent implements OnInit {

  @Input() microphones: IMicrophone[];
  soundIcon:string;
  soundRegularIcon:string="../assets/icons/sound.svg";
  muteIcon:string="../assets/icons/mute.svg";


  constructor() { }

  ngOnInit() {
    this.soundIcon=this. soundRegularIcon;
  }
  muteClicked(id:number){
    let muteButton=document.getElementById("button"+id) as HTMLImageElement;
    if (muteButton.src=="http://localhost:4200/assets/icons/sound.svg"){
      muteButton.src= this.muteIcon;
    }else {
      muteButton.src=this.soundRegularIcon;
    }
}
  
}
