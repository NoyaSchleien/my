import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ISlide } from './slide';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class SlidesService {
  msgToEdit: any;

  constructor() { }

  getSlides(): ISlide[] {
    return [
      {
        "location": "../assets/maps/map1.jpg",
        "description": "Tel Aviv",
        "slideIndex": 0,
        "areas": [
          {
            "id": 5,
            "name": "a1",
            "top": 10,
            "left": 250,
            "areaCameras": [0, 1, 2],
            "areaMicrophones": [6, 7]
          },
          {
            "id": 2,
            "name": "a2",
            "top": 150,
            "left": 500,
            "areaCameras": [3, 4, 5],
            "areaMicrophones": [8, 9]
          }
        ],
        "cameras": [
          { "id": 0, "name": "c1", "top": 10, "left": 100 },
          { "id": 1, "name": "c2", "top": 100, "left": 150 },
          { "id": 2, "name": "c3", "top": 200, "left": 200 },
          { "id": 3, "name": "c4", "top": 70, "left": 700 },
          { "id": 4, "name": "c5", "top": 250, "left": 750 },
          { "id": 5, "name": "c6", "top": 450, "left": 800 }
        ],
        "microphones": [
          { "id": 6, "name": "m1", "top": 300, "left": 100 },
          { "id": 7, "name": "m2", "top": 400, "left": 200 },
          { "id": 8, "name": "m3", "top": 150, "left": 800 },
          { "id": 9, "name": "m4", "top": 350, "left": 700 }
        ]
      },
      {
        "location": "../assets/maps/map2.jpg",
        "description": "New York",
        "slideIndex":1,
       "areas": [
        {
          "id": 5,
          "name": "a1",
          "top": 10,
          "left": 250,
          "areaCameras": [0, 1, 2],
          "areaMicrophones": [6, 7]
        },
        {
          "id": 2,
          "name": "a2",
          "top": 150,
          "left": 500,
          "areaCameras": [3, 4, 5],
          "areaMicrophones": [8, 9]
        }
      ],
      "cameras": [
        { "id": 0, "name": "c1", "top": 10, "left": 100 },
        { "id": 1, "name": "c2", "top": 100, "left": 100 },
        { "id": 2, "name": "c3", "top": 200, "left": 100 },
        { "id": 3, "name": "c4", "top": 70, "left": 700 },
        { "id": 4, "name": "c5", "top": 300, "left": 700 },
        { "id": 5, "name": "c6", "top": 450, "left": 700 }
      ],
      "microphones": [
        { "id": 6, "name": "m1", "top": 300, "left": 100 },
        { "id": 7, "name": "m2", "top": 400, "left": 100 },
        { "id": 8, "name": "m3", "top": 150, "left": 700 },
        { "id": 9, "name": "m4", "top": 350, "left": 700 }
      ]
    },
      {
        "location": "../assets/maps/map3.jpg",
        "description": "Honolulu",
        "slideIndex":2,
        "areas": [
          {
            "id": 5,
            "name": "a1",
            "top": 10,
            "left": 250,
            "areaCameras": [0, 1, 2],
            "areaMicrophones": [6, 7]
          },
          {
            "id": 2,
            "name": "a2",
            "top": 150,
            "left": 500,
            "areaCameras": [3, 4, 5],
            "areaMicrophones": [8, 9]
          }
        ],
        "cameras": [
          { "id": 0, "name": "c1", "top": 10, "left": 100 },
          { "id": 1, "name": "c2", "top": 100, "left": 100 },
          { "id": 2, "name": "c3", "top": 200, "left": 100 },
          { "id": 3, "name": "c4", "top": 70, "left": 700 },
          { "id": 4, "name": "c5", "top": 300, "left": 700 },
          { "id": 5, "name": "c6", "top": 450, "left": 700 }
        ],
        "microphones": [
          { "id": 6, "name": "m1", "top": 300, "left": 100 },
          { "id": 7, "name": "m2", "top": 400, "left": 100 },
          { "id": 8, "name": "m3", "top": 150, "left": 700 },
          { "id": 9, "name": "m4", "top": 350, "left": 700 }
        ]
      },
      {
        "location": "../assets/maps/map4.jpg",
        "description": "Paris",
        "slideIndex":3,
        "areas": [
          {
            "id": 5,
            "name": "a1",
            "top": 10,
            "left": 250,
            "areaCameras": [0, 1, 2],
            "areaMicrophones": [6, 7]
          },
          {
            "id": 2,
            "name": "a2",
            "top": 150,
            "left": 500,
            "areaCameras": [3, 4, 5],
            "areaMicrophones": [8, 9]
          }
        ],
        "cameras": [
          { "id": 0, "name": "c1", "top": 10, "left": 100 },
          { "id": 1, "name": "c2", "top": 100, "left": 100 },
          { "id": 2, "name": "c3", "top": 200, "left": 100 },
          { "id": 3, "name": "c4", "top": 70, "left": 700 },
          { "id": 4, "name": "c5", "top": 300, "left": 700 },
          { "id": 5, "name": "c6", "top": 450, "left": 700 }
        ],
        "microphones": [
          { "id": 6, "name": "m1", "top": 300, "left": 100 },
          { "id": 7, "name": "m2", "top": 400, "left": 100 },
          { "id": 8, "name": "m3", "top": 150, "left": 700 },
          { "id": 9, "name": "m4", "top": 350, "left": 700 }
        ]}
      //   ,
      // {
      //   "location": "../assets/maps/map5.jpg",
      //   "description": "Venice",
      //   "slideIndex":4,
      //   "areas": [
      //     {
      //       "id": 5,
      //       "name": "a1",
      //       "top": 10,
      //       "left": 250,
      //       "areaCameras": [0, 1, 2],
      //       "areaMicrophones": [6, 7]
      //     },
      //     {
      //       "id": 2,
      //       "name": "a2",
      //       "top": 150,
      //       "left": 500,
      //       "areaCameras": [3, 4, 5],
      //       "areaMicrophones": [8, 9]
      //     }
      //   ],
      //   "cameras": [
      //     { "id": 0, "name": "c1", "top": 10, "left": 100 },
      //     { "id": 1, "name": "c2", "top": 100, "left": 100 },
      //     { "id": 2, "name": "c3", "top": 200, "left": 100 },
      //     { "id": 3, "name": "c4", "top": 70, "left": 700 },
      //     { "id": 4, "name": "c5", "top": 300, "left": 700 },
      //     { "id": 5, "name": "c6", "top": 450, "left": 700 }
      //   ],
      //   "microphones": [
      //     { "id": 6, "name": "m1", "top": 300, "left": 100 },
      //     { "id": 7, "name": "m2", "top": 400, "left": 100 },
      //     { "id": 8, "name": "m3", "top": 150, "left": 700 },
      //     { "id": 9, "name": "m4", "top": 350, "left": 700 }
      //   ]
      // }
    ]
  }
}
