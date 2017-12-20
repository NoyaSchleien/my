import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayRoutingModule } from './play-routing.module';
import { PlayComponent } from './play.component';

@NgModule({
  imports: [
    CommonModule,
    PlayRoutingModule
  ],
  declarations: [PlayComponent]
})
export class PlayModule { }
