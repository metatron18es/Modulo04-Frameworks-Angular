import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from "src/app/services/image.service";
import { ImageEntity } from "../model/ImageEntity";
import { PaginatorEntity, IntervalEntity } from "../model/PaginatorEntity";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private router: Router, private imageService: ImageService) { }
  paginator: PaginatorEntity = {
    page : 1,
    numOptions : 9,
    totalOptions : 0
  };
  interval:IntervalEntity = {
    start: 0,
    end: this.paginator.numOptions,
  }
  imageArray: ImageEntity[];

  trackImages(index:number, el:any): number {
    return el.id;
  }

  ngOnInit(): void {
    this.imageArray = this.imageService.getAll();
    this.paginator.totalOptions = this.imageService.getLength();
    this.onPageChange(this.interval);
  }

  showImage(id) {
    this.router.navigateByUrl('/gallery/' + id);
  }

  onPageChange(interval: IntervalEntity):void {
    this.interval = interval;
  }

}
