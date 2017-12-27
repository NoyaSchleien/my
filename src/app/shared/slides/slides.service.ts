import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ISlide } from './slide';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class SlidesService {

  constructor() { }

  getSlides(): ISlide[] {
    return [
      {
        "location": "../assets/maps/map1.jpg",
        "description": "Tel Aviv",
        "slideIndex":0,
        "cameras":[
          {"name":"c1","top":1,"left":1},{"name":"c2","top":20,"left":20},{"name":"c3","top":40,"left":50},{"name":"c4","top":70,"left":70},{"name":"c5","top":200, "left":400},{"name":"c6","top":350,"left":350} 
          ],  
        "microphones":[
          {"name":"m1","top":5,"left":5},{"name":"m2","top":30,"left":15},{"name":"m3","top":65,"left":90},{"name":"m4","top":200, "left":200}
        ],
        "areas":[
          {"name":"a1","top":10,"left":10,"areaCameras":[{"c1"},{"c2"},{"c3"}], "areaMicrophones":[{"m1"},{"m2"}]},{"name":"a2","top":350, "left":400,"areaCameras":[{"c4"},{"c5"},{"c6"}], "areaMicrophones":[{"m3"},{"m4"}]}
        ]
      },
      {
        "location": "../assets/maps/map2.jpg",
        "description": "New York",
        "slideIndex":1,
        "cameras":[
          {"name":"c1","top":1,"left":1},{"name":"c2","top":20,"left":20},{"name":"c3","top":40,"left":50},{"name":"c4","top":70,"left":70},{"name":"c5","top":200, "left":400},{"name":"c6","top":350,"left":350} 
        ],  
        "microphones":[
          {"name":"m1","top":5,"left":5},{"name":"m2","top":30,"left":15},{"name":"m3","top":65,"left":90},{"name":"m4","top":200, "left":200}
        ],
        "areas":[
          {"name":"a1","top":10,"left":10,"areaCameras":[{"c1"},{"c2"},{"c3"}], "areaMicrophones":[{"m1"},{"m2"}]},{"name":"a2","top":50, "left":50,"areaCameras":[{"c4"},{"c5"},{"c6"}], "areaMicrophones":[{"m3"},{"m4"}]}
        ]

      },
      {
        "location": "../assets/maps/map3.jpg",
        "description": "Honolulu",
        "slideIndex":2,
        "cameras":[
          {"name":"c1","top":1,"left":1},{"name":"c2","top":20,"left":20},{"name":"c3","top":40,"left":50},{"name":"c4","top":70,"left":70},{"name":"c5","top":200, "left":400},{"name":"c6","top":350,"left":350} 
        ],  
        "microphones":[
          {"name":"m1","top":5,"left":5},{"name":"m2","top":30,"left":15},{"name":"m3","top":65,"left":90},{"name":"m4","top":200, "left":200}
        ],
        "areas":[
          {"name":"a1","top":10,"left":10,"areaCameras":[{"c1"},{"c2"},{"c3"}], "areaMicrophones":[{"m1"},{"m2"}]},{"name":"a2","top":50, "left":50,"areaCameras":[{"c4"},{"c5"},{"c6"}], "areaMicrophones":[{"m3"},{"m4"}]}
        ]
      },
      {
        "location": "../assets/maps/map4.jpg",
        "description": "Paris",
        "slideIndex":3,
        "cameras":[
          {"name":"c1","top":1,"left":1},{"name":"c2","top":20,"left":20},{"name":"c3","top":40,"left":50},{"name":"c4","top":70,"left":70},{"name":"c5","top":200, "left":400},{"name":"c6","top":350,"left":350} 
        ],  
        "microphones":[
          {"name":"m1","top":5,"left":5},{"name":"m2","top":30,"left":15},{"name":"m3","top":65,"left":90},{"name":"m4","top":200, "left":200}
        ],
        "areas":[
          {"name":"a1","top":10,"left":10,"areaCameras":[{"c1"},{"c2"},{"c3"}], "areaMicrophones":[{"m1"},{"m2"}]},{"name":"a2","top":50, "left":50,"areaCameras":[{"c4"},{"c5"},{"c6"}], "areaMicrophones":[{"m3"},{"m4"}]}
        ]
      },
      {
        "location": "../assets/maps/map5.jpg",
        "description": "Venice",
        "slideIndex":4,
        "cameras":[
          {"name":"c1","top":1,"left":1},{"name":"c2","top":20,"left":20},{"name":"c3","top":40,"left":50},{"name":"c4","top":70,"left":70},{"name":"c5","top":200, "left":400},{"name":"c6","top":350,"left":350} 
        ],  
        "microphones":[
          {"name":"m1","top":5,"left":5},{"name":"m2","top":30,"left":15},{"name":"m3","top":65,"left":90},{"name":"m4","top":200, "left":200}
        ],
        "areas":[
          {"name":"a1","top":10,"left":10,"areaCameras":[{"c1"},{"c2"},{"c3"}], "areaMicrophones":[{"m1"},{"m2"}]},{"name":"a2","top":50, "left":50,"areaCameras":[{"c4"},{"c5"},{"c6"}], "areaMicrophones":[{"m3"},{"m4"}]}
        ]
      }
    ]
  }
  }
