import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SlidesService } from '../slides/slides.service';
import { ISlide } from '../slides/slide';
import { IMicrophone } from '../slides/microphone';
import { ICamera } from '../slides/camera';
import { IConfig } from './config';
import { MediaTableService } from './media-table.service';

@Component({
  selector: 'hs-media-table',
  templateUrl: './media-table.component.html',
  styleUrls: ['./media-table.component.css']
})
export class MediaTableComponent implements OnInit {
  
  @Input() cameras: ICamera[];
  @Input() microphones: IMicrophone[];
  
  configurations: IConfig[];
  configuration: any={};
  modalStyle: string;
  defaultIndex:number;
  makeDefault:boolean;
  configChosen:IConfig;
  hasVidRowError:boolean;
  hasVidColumnError:boolean;
  hasAudioRowError:boolean;

  @Output() configChosenEvent:EventEmitter<IConfig>=new EventEmitter<IConfig>();
  constructor(private _mediaTableService: MediaTableService) { }

  ngOnInit() {
    this.configurations = this._mediaTableService.getConfigurations();
    this.modalStyle = "none";
    this.defaultIndex=this.getDefaultIndex();
    this.makeDefault=false;
    this.configChosen=this.configurations[this.defaultIndex];
    this.hasVidRowError=false;
    this.hasVidColumnError=false;
    this.hasAudioRowError=false;
  }
  
  addNew() {
    this.modalStyle = "block";
  }
  
  cancelModal() {
    this.modalStyle = "none";
    this.resetForm();
  }
  
  getDefaultIndex():number {
    return this._mediaTableService.defaultIndex;
  }
  
  
  createNewConfig(configForm:NgForm) {
    console.log("create new config - configuration = " + this.configuration);
    this._mediaTableService.createNewConfig(this.configuration,this.makeDefault);
    this.configurations = this._mediaTableService.getConfigurations();
    this.modalStyle="none";
    if (this.makeDefault) this.defaultIndex=this.getDefaultIndex();
    this.resetForm();
  }
  onConfigClick(config:IConfig){
    this.configChosen=config;this.configChosenEvent.emit(this.configChosen);

  }

  
  showSecondLayer(i:number){
let layer=document.getElementById("layer"+i) as HTMLDivElement;
layer.style.display="block";
}
hideSecondLayer(i:number){
  let layer=document.getElementById("layer" + i) as HTMLDivElement;
  layer.style.display="none";
  }

  validateVideoRows(value){
    if(value>=1 && value<=10)
      this.hasVidRowError=false;
      else
      this.hasVidRowError=true;
  }

  validateVideoColumns(value){
    if(value>=1 && value<=10)
    this.hasVidColumnError=false;
    else
    this.hasVidColumnError=true;
}

validateAudioRows(value){
  if(value>=1 && value<=10)
  this.hasAudioRowError=false;
  else
  this.hasAudioRowError=true;
}
resetForm(){
  this.configuration={};
    this.hasVidRowError=false;
    this.hasVidColumnError=false;
    this.hasAudioRowError=false;
    this.makeDefault=false;
}
}
