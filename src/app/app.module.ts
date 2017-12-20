import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlayModule } from './play/play.module';
import { WatchModule } from './watch/watch.module';
import { RecordModule } from './record/record.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlayModule,
    WatchModule,
    RecordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
