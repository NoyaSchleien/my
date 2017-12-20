import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordRoutingModule } from './record-routing.module';
import { RecordComponent } from './record.component';

@NgModule({
  imports: [
    CommonModule,
    RecordRoutingModule
  ],
  declarations: [RecordComponent]
})
export class RecordModule { }
