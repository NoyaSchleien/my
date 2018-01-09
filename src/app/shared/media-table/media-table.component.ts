import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  defaultConfiguration: IConfig;

  constructor(private _mediaTableService: MediaTableService) { }

  ngOnInit() {
    this.configurations = this._mediaTableService.getConfigurations();
    this.modalStyle = "none";
    this.defaultConfiguration=this.getDefault();
  }
  
  addNew() {
    this.modalStyle = "block";
  }
  
  cancelModal() {
    this.modalStyle = "none";
  }
  
  getDefault():IConfig {
    return this._mediaTableService.defaultConfig;
  }
  changeDefault() { }
  
  createNewConfig() {
    console.log("create new config - configuration = " + this.configuration);
    this._mediaTableService.createNewConfig(this.configuration);
    this.configurations = this._mediaTableService.getConfigurations();
    this.modalStyle="none";
  }

  // onSubmit() {
  //   if (this.configForm["nativeElement"].valid) {
  //     console.log("Form Submitted!");
  //   }
  // }
}
