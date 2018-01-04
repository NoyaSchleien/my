import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlayModule } from './play/play.module';
import { WatchModule } from './watch/watch.module';
import { RecordModule } from './record/record.module';
import { LiveModule } from './live/live.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PlayModule,
    WatchModule,
    RecordModule,
    LiveModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
