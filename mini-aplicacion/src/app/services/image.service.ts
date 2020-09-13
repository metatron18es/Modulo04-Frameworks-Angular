import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageEntity } from '../model/ImageEntity';
import { NavigationEntity } from '../model/navigationEntity';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  imageArray:ImageEntity[] = [
    { id: 0, src: 'http://lorempixel.com/600/400/food/', title: 'Image Name 1'},
    { id: 1, src: 'http://lorempixel.com/600/400/food/', title: 'Image Name 2'},
    { id: 2, src: 'http://lorempixel.com/600/400/food/', title: 'Image Name 3'},
    { id: 3, src: 'http://lorempixel.com/600/400/food/', title: 'Image Name 4'},
    { id: 4, src: 'http://lorempixel.com/600/400/food/', title: 'Image Name 5'},
    { id: 5, src: 'http://lorempixel.com/600/400/food/', title: 'Image Name 6'},
    { id: 6, src: 'http://lorempixel.com/600/400/food/', title: 'Image Name 7'},
    { id: 7, src: 'http://lorempixel.com/600/400/food/', title: 'Image Name 8'},
    { id: 8, src: 'http://lorempixel.com/600/400/food/', title: 'Image Name 9'},
    { id: 9, src: 'http://lorempixel.com/600/400/food/', title: 'Image Name 10'},
    { id: 10, src: 'http://lorempixel.com/600/400/food/', title: 'Image Name 11'},
    { id: 11, src: 'http://lorempixel.com/600/400/food/', title: 'Image Name 12'},
    { id: 12, src: 'http://lorempixel.com/600/400/food/', title: 'Image Name 13'},
    { id: 13, src: 'http://lorempixel.com/600/400/food/', title: 'Image Name 14'},
    { id: 14, src: 'http://lorempixel.com/600/400/food/', title: 'Image Name 15'},
    { id: 15, src: 'http://lorempixel.com/600/400/food/', title: 'Image Name 16'},
    { id: 16, src: 'http://lorempixel.com/600/400/food/', title: 'Image Name 17'},
    { id: 17, src: 'http://lorempixel.com/600/400/food/', title: 'Image Name 18'},
    { id: 18, src: 'http://lorempixel.com/600/400/food/', title: 'Image Name 19'},
    { id: 19, src: 'http://lorempixel.com/600/400/food/', title: 'Image Name 20'},
    { id: 20, src: 'http://lorempixel.com/600/400/food/', title: 'Image Name 21'},
    { id: 21, src: 'http://lorempixel.com/600/400/food/', title: 'Image Name 22'},
    { id: 22, src: 'http://lorempixel.com/600/400/food/', title: 'Image Name 23'},
    { id: 23, src: 'http://lorempixel.com/600/400/food/', title: 'Image Name 24'},
    { id: 24, src: 'http://lorempixel.com/600/400/food/', title: 'Image Name 25'}
  ];

  constructor() { }

  getAll(): ImageEntity[] {
    return this.imageArray;
  }

  getLength():number {
    return this.imageArray.length;
  }

  get(id: number): ImageEntity {
    return this.imageArray.find(item => item.id === Number(id));
  }

  nextId(id: number): number {
    return (this.imageArray.findIndex(item => item.id === Number(id)) + Number(1));
  }
  prevId(id: number): number {
    return (this.imageArray.findIndex(item => item.id === Number(id)) - Number(1));
  }
  firstId(): number {
    return this.imageArray[0].id;
  }
  lastId(): number {
    return this.imageArray[this.getLength() - 1].id;
  }

  navigation(id:number): NavigationEntity {
    return {
      firstId: this.firstId(),
      prevId: this.prevId(id),
      nextId: this.nextId(id),
      lastId: this.lastId()
    };
  }
}
