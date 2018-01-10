import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SlidesComponent } from './slides/slides.component';
import { SlidesService } from './slides/slides.service';
import { MediaTableComponent } from './media-table/media-table.component';
import { MediaTableService } from './media-table/media-table.service';
import { VideoScreenComponent } from './video-screen/video-screen.component';
import { AudioScreenComponent } from './audio-screen/audio-screen.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SlidesComponent,
    MediaTableComponent,
    VideoScreenComponent,
    AudioScreenComponent
  ],
  exports: [
    SlidesComponent,
    MediaTableComponent,
    FormsModule,
    VideoScreenComponent,
    AudioScreenComponent
  ],
  providers: [
    SlidesService,
    MediaTableService
  ]
})
export class SharedModule { }
