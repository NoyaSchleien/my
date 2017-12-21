import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveRoutingModule } from './live-routing.module';
import { LiveComponent } from './live.component';

@NgModule({
  imports: [
    CommonModule,
    LiveRoutingModule
  ],
  declarations: [LiveComponent]
})
export class LiveModule { }
