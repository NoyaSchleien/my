import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SlidesComponent } from './slides/slides.component';
import { SlidesService } from './slides/slides.service';
import { MediaTableComponent } from './media-table/media-table.component';
import { MediaTableService } from './media-table/media-table.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SlidesComponent,
    MediaTableComponent,
  ],
  exports: [
    SlidesComponent,
    MediaTableComponent,
    FormsModule
  ],
  providers: [
    SlidesService,
    MediaTableService
  ]
})
export class SharedModule { }
