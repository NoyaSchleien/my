import { Injectable } from '@angular/core';
import { IConfig } from './config';

@Injectable()
export class MediaTableService {

  defaultConfig: IConfig;
  configurations: IConfig[]=[];

  constructor() {
    this.defaultConfig = {
      "name": "2*2",
      "description": "Default Config",
      "videoRows": 2,
      "videoColumns": 2,
      "audioRows": 1
    }
    this.configurations[0]=this.defaultConfig;
  }

  getConfigurations() {
    return this.configurations;
  }

  createNewConfig(newConfig: IConfig) {
    this.configurations.push(newConfig);
  }

  updateConfig(beforeConfig: IConfig, afterConfig:IConfig) {
    let index = this.configurations.indexOf(beforeConfig, 0);
    this.configurations[index].name = afterConfig.name;
    this.configurations[index].description = afterConfig.description;
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
