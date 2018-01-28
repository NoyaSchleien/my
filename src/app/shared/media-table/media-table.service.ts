import { Injectable } from '@angular/core';
import { IConfig } from './config';

@Injectable()
export class MediaTableService {

  defaultIndex: number;
  configurations: IConfig[] = [];

  constructor() {
    this.defaultIndex = 0;
    this.configurations[this.defaultIndex] = {
      "name": "2*2",
      "description": "Default Config",
      "videoRows": 2,
      "videoColumns": 2,
      "audioRows": 1
    }
  }

  getConfigurations() {
    return this.configurations;
  }

  createNewConfig(newConfig: IConfig, makeDefault: boolean) {
    this.configurations.push(newConfig);
    if (makeDefault) {
      this.defaultIndex = this.configurations.length - 1;
    }
  }

  updateConfig(beforeConfig: IConfig, afterConfig: IConfig, makeDefault: boolean) {
    let index = this.configurations.indexOf(beforeConfig, 0);
    this.configurations[index].name = afterConfig.name;
    this.configurations[index].description = afterConfig.description;
    this.configurations[index].videoRows = afterConfig.videoRows;
    this.configurations[index].videoColumns = afterConfig.videoColumns;
    this.configurations[index].audioRows = afterConfig.audioRows;
    if (makeDefault) this.defaultIndex = index;
    else if (index == this.defaultIndex) this.defaultIndex = 0;

  }

  deleteCongif(config: IConfig) {
    let index = this.configurations.indexOf(config, 0);
    if (index == this.defaultIndex) this.defaultIndex = 0;
    else if (index < this.defaultIndex) this.defaultIndex -= 1;
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

  isDefault(config: IConfig): boolean {
    if (this.configurations[this.defaultIndex] == config) return true;
    else return false;
  }
}
