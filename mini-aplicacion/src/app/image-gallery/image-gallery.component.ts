import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageEntity } from '../model/ImageEntity';
import { ImageService } from '../services/image.service';
import { NavigationEntity } from '../model/navigationEntity';
import { faChevronCircleLeft, faChevronCircleRight, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  navigation: NavigationEntity;
  image_id: number;
  image: ImageEntity;

  faChevronCircleLeft:IconDefinition = faChevronCircleLeft;
  faChevronCircleRight:IconDefinition = faChevronCircleRight;

  constructor(
    private actRoute: ActivatedRoute,
    private imageService: ImageService
    ) {}

  ngOnInit(): void {
    var component = this;
    this.actRoute.params.subscribe(params => {
      component.image_id = params.id;
      component.image = component.imageService.get(component.image_id);
      component.navigation = component.imageService.navigation(component.image_id);
  });
  }


}
