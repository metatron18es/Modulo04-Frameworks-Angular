import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  image_id: number;

  constructor(private actRoute: ActivatedRoute) {
    this.image_id = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
  }

}
