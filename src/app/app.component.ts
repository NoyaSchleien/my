import { Component } from '@angular/core';

@Component({
  selector: 'hs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sidebar: boolean = false;
  marginLeft: number;
  width: number;
  title:string="Open Menu"
spining:string;

  showSidebar(){
    if (!this.sidebar) this.openSidebar();
    else this.closeSidebar();

  }
  openSidebar() {
    this.sidebar = true;
    this.marginLeft = 5;
    this.width = 5;
    this.title="Close Menu";
  }

  
closeSidebar(){
  this.sidebar = false;
  this.marginLeft = 0;
  this.title="Open Menu";
  }
  spin(){
    this.spining="rotateY(180deg)";
  }

  }
