import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { SlidesService } from './slides/slides.service';
import { MediaTableComponent } from './media-table/media-table.component';
import { AreaComponent } from './areas/area.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SlidesComponent,
    MediaTableComponent,
    AreaComponent
  ],
  exports: [
    SlidesComponent,
    MediaTableComponent,
    AreaComponent
  ],
  providers: [
    SlidesService
  ]
})
export class SharedModule { }
