import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';
import { RecordComponent } from './record/record.component';
import { WatchComponent } from './watch/watch.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: "home", component: HomeComponent },
      {path: "play", component: PlayComponent },
      {path: "watch", component: WatchComponent },
      {path: "record", component: RecordComponent },
  { path: " ", redirectTo: "home", pathMatch: "full" },
  { path: "**", redirectTo: "home", pathMatch: "full" }
])
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
