import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchRoutingModule } from './watch-routing.module';
import { WatchComponent } from './watch.component';

@NgModule({
  imports: [
    CommonModule,
    WatchRoutingModule
  ],
  declarations: [WatchComponent]
})
export class WatchModule { }
