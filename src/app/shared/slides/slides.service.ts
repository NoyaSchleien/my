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
        "slideIndex":0
      },
      {
        "location": "../assets/maps/map2.jpg",
        "description": "New York",
        "slideIndex":1
      },
      {
        "location": "../assets/maps/map3.jpg",
        "description": "Honolulu",
        "slideIndex":2
      },
      {
        "location": "../assets/maps/map4.jpg",
        "description": "Paris",
        "slideIndex":3
      },
      {
        "location": "../assets/maps/map5.jpg",
        "description": "Venice",
        "slideIndex":4
      }
    ]
  }
}
