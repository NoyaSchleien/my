import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { SlidesService } from './slides/slides.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SlidesComponent
  ],
  exports: [
    SlidesComponent
  ],
  providers: [
    SlidesService
  ]
})
export class SharedModule { }
