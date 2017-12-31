import { Component, OnInit, Input } from '@angular/core';
import { SlidesService } from '../slides/slides.service';
import { ISlide } from '../slides/slide';

@Component({
  selector: 'hs-media-table',
  templateUrl: './media-table.component.html',
  styleUrls: ['./media-table.component.css']
})
export class MediaTableComponent implements OnInit {

  @Input() currentSlide:ISlide;
  @Input() areasChecked=[];  
  constructor(private _slidesService: SlidesService) { }

  ngOnInit() {
    console.log(this.currentSlide + " from table");
    console.log(this.areasChecked + " from table");
    
    // this._slidesService.getArea.subscribe((data)=>{console.log(data)})
  }
}
