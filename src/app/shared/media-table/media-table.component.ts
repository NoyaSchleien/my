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
  configuration: any = {};
  modalStyle: string;
  updateModalStyle: string;
  defaultIndex: number;
  makeDefault: boolean;
  configChosen: IConfig;
  hasVidRowError: boolean;
  hasVidColumnError: boolean;
  hasAudioRowError: boolean;
  updatedConfigBefore: IConfig;
  updatedConfigAfter: any = {};
  isDefault: boolean;
  nameKeyValid:boolean;

  @Output() configChosenEvent: EventEmitter<IConfig> = new EventEmitter<IConfig>();
  constructor(private _mediaTableService: MediaTableService) { }

  ngOnInit() {
    this.getConfigurations();
    this.modalStyle = "none";
    this.updateModalStyle = "none";
    this.getDefaultIndex();
    this.makeDefault = false;
    this.configChosen = this.configurations[this.defaultIndex];
    this.hasVidRowError = false;
    this.hasVidColumnError = false;
    this.hasAudioRowError = false;
    this.updatedConfigBefore = null;
    this.isDefault = false;
    this.nameKeyValid=true;
  }

  getConfigurations() {
    this.configurations = this._mediaTableService.getConfigurations();
  }

  addNew() {
    this.modalStyle = "block";
  }

  cancelModal() {
    this.modalStyle = "none";
    this.resetForm();
  }

  getDefaultIndex() {
    this.defaultIndex = this._mediaTableService.defaultIndex;
  }


  createNewConfig(configForm: NgForm) {
    this.nameKeyValid=true;
    this.configurations.forEach(config => {
      if (config.name == this.configuration.name) 
      this.nameKeyValid=false;
    });
    if (this.nameKeyValid){
    this._mediaTableService.createNewConfig(this.configuration, this.makeDefault);
    this.getConfigurations();
    this.modalStyle = "none";
    if (this.makeDefault) this.getDefaultIndex();
    this.resetForm();
    }
  }

  showSecondLayer(i: number) {
    let layer = document.getElementById("layer" + i) as HTMLDivElement;
    layer.style.display = "block";
  }

  hideSecondLayer(i: number) {
    let layer = document.getElementById("layer" + i) as HTMLDivElement;
    layer.style.display = "none";
  }

  validateVideoRows(value) {
    if (value >= 1 && value <= 10)
      this.hasVidRowError = false;
    else
      this.hasVidRowError = true;
  }

  validateVideoColumns(value) {
    if (value >= 1 && value <= 10)
      this.hasVidColumnError = false;
    else
      this.hasVidColumnError = true;
  }

  validateAudioRows(value) {
    if (value >= 1 && value <= 10)
      this.hasAudioRowError = false;
    else
      this.hasAudioRowError = true;
  }

  resetForm() {
    this.configuration = {};
    this.hasVidRowError = false;
    this.hasVidColumnError = false;
    this.hasAudioRowError = false;
    this.makeDefault = false;
    this.nameKeyValid=true;
  }

  deleteConfig(config: IConfig) {
    this._mediaTableService.deleteCongif(config);
    this.getConfigurations();
    this.getDefaultIndex();
  }

  createUpdateModal(config: IConfig) {
    this.updatedConfigBefore = config;
    this.updatedConfigAfter = config;
    this.isDefault = this._mediaTableService.isDefault(this.updatedConfigBefore);
    this.updateModalStyle = "block";
  }

  cancelUpdateModal() {
    this.updateModalStyle = "none";
    this.resetUpdateForm();
  }

  resetUpdateForm() {
    this._mediaTableService.updateConfig(this.updatedConfigBefore, this.updatedConfigBefore, this.isDefault);
    this.getConfigurations();
    this.updatedConfigAfter = {};
    this.hasVidRowError = false;
    this.hasVidColumnError = false;
    this.hasAudioRowError = false;
    this.makeDefault = false;
    this.isDefault=false;
    this.nameKeyValid=true;

  }

  updateConfig(configForm) {
    this.nameKeyValid=true;
    this.configurations.forEach(config =>{
      if (config.name == this.updatedConfigAfter.name)
      this.nameKeyValid=false;
    });
    if (this.nameKeyValid){
      this._mediaTableService.updateConfig(this.updatedConfigBefore, this.updatedConfigAfter,this.makeDefault);
      this.getConfigurations();
      this.updateModalStyle = "none";
      this.getDefaultIndex();
      this.resetUpdateForm();
      this.updatedConfigBefore=null;
    }
  }


  onConfigClick(config: IConfig) {
    this.configChosen = config; this.configChosenEvent.emit(this.configChosen);

  }
}
