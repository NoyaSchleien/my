import { Injectable } from '@angular/core';
import { IConfig } from './config';

@Injectable()
export class MediaTableService {

  defaultConfig: IConfig;
  configurations: IConfig[]=[];
  id: number;

  constructor() {
    this.id = 1;
    this.defaultConfig = {
      "id": this.id,
      "name": "2*2",
      "title": "Default Config",
      "videoRows": 2,
      "videoColumns": 2,
      "audioRows": 1
    }
    this.id += 1;
    console.log(this.defaultConfig);
    this.configurations[0]=this.defaultConfig;
  }

  getConfigurations() {
    return this.configurations;
  }

  createNewConfig(newConfig: IConfig) {
    newConfig.id = this.id;
    this.id += 1;
    this.configurations.push(newConfig);
  }

  updateConfig(beforeConfig: IConfig, afterConfig:IConfig) {
    let index = this.configurations.indexOf(beforeConfig, 0);
    this.configurations[index].name = afterConfig.name;
    this.configurations[index].title = afterConfig.title;
    this.configurations[index].videoRows = afterConfig.videoRows;
    this.configurations[index].videoColumns = afterConfig.videoColumns;
    this.configurations[index].audioRows = afterConfig.audioRows;
  }

  deleteCongif(config: IConfig) {
    let index = this.configurations.indexOf(config, 0);
    this.configurations.splice(index, 1);
  }

  getConfigByName(confName: string) {
    let configuration: IConfig;
    for (let conf of this.configurations) {
      if (conf.name == confName) {
        configuration = conf;
        return configuration;
      }
    }

  }
}
