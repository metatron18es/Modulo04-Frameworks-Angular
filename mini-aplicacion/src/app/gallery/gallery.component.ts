import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageEntity } from "../model/ImageEntity";
import { PaginatorEntity, IntervalEntity } from "../model/PaginatorEntity";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private router: Router) { }
  paginator: PaginatorEntity = {
    page : 1,
    numOptions : 9,
    totalOptions : 0
  };
  interval:IntervalEntity = {
    start: 0,
    end: this.paginator.numOptions,
  }

  imageArray:ImageEntity[] = [
    { id: 0, src: 'http://lorempixel.com/250/200/food/', title: 'Image Name 1'},
    { id: 1, src: 'http://lorempixel.com/250/200/food/', title: 'Image Name 2'},
    { id: 2, src: 'http://lorempixel.com/250/200/food/', title: 'Image Name 3'},
    { id: 3, src: 'http://lorempixel.com/250/200/food/', title: 'Image Name 4'},
    { id: 4, src: 'http://lorempixel.com/250/200/food/', title: 'Image Name 5'},
    { id: 5, src: 'http://lorempixel.com/250/200/food/', title: 'Image Name 6'},
    { id: 6, src: 'http://lorempixel.com/250/200/food/', title: 'Image Name 7'},
    { id: 7, src: 'http://lorempixel.com/250/200/food/', title: 'Image Name 8'},
    { id: 8, src: 'http://lorempixel.com/250/200/food/', title: 'Image Name 9'},
    { id: 9, src: 'http://lorempixel.com/250/200/food/', title: 'Image Name 10'},
    { id: 10, src: 'http://lorempixel.com/250/200/food/', title: 'Image Name 11'},
    { id: 11, src: 'http://lorempixel.com/250/200/food/', title: 'Image Name 12'},
    { id: 12, src: 'http://lorempixel.com/250/200/food/', title: 'Image Name 13'},
    { id: 13, src: 'http://lorempixel.com/250/200/food/', title: 'Image Name 14'},
    { id: 14, src: 'http://lorempixel.com/250/200/food/', title: 'Image Name 15'},
    { id: 15, src: 'http://lorempixel.com/250/200/food/', title: 'Image Name 16'},
    { id: 16, src: 'http://lorempixel.com/250/200/food/', title: 'Image Name 17'},
    { id: 17, src: 'http://lorempixel.com/250/200/food/', title: 'Image Name 18'},
    { id: 18, src: 'http://lorempixel.com/250/200/food/', title: 'Image Name 19'},
    { id: 19, src: 'http://lorempixel.com/250/200/food/', title: 'Image Name 20'},
    { id: 20, src: 'http://lorempixel.com/250/200/food/', title: 'Image Name 21'},
    { id: 21, src: 'http://lorempixel.com/250/200/food/', title: 'Image Name 22'},
    { id: 22, src: 'http://lorempixel.com/250/200/food/', title: 'Image Name 23'},
    { id: 23, src: 'http://lorempixel.com/250/200/food/', title: 'Image Name 24'},
    { id: 24, src: 'http://lorempixel.com/250/200/food/', title: 'Image Name 25'}
  ];

  trackImages(index:number, el:any): number {
    return el.id;
  }

  ngOnInit(): void {
    this.paginator.totalOptions = this.imageArray.length;
    this.onPageChange(this.interval);
  }

  showImage(id) {
    this.router.navigateByUrl('/gallery/' + id);
  }

  onPageChange(interval: IntervalEntity):void {
    this.interval = interval;
  }

}
