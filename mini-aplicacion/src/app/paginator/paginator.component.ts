import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaginatorEntity, IntervalEntity } from "../model/PaginatorEntity";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  totalPages: number = 0;
  interval:IntervalEntity = {
    start: 0,
    end: 0,
  }
  arrayPages:number[] = [];

  @Input() paginator: PaginatorEntity;
  @Output() pageEmitter: EventEmitter<IntervalEntity> =  new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.totalPages = Math.ceil(this.paginator.totalOptions / this.paginator.numOptions);
    this.arrayPages = Array.from(Array(this.totalPages),(x,i)=>i)
  }

  next(){
    this.paginator.page++;
    this.movePage();
  }

  prev(){
    this.paginator.page--;
    this.movePage();
  }

  goToPage(page:number) {
    this.paginator.page = page;
    this.movePage()
  }

  movePage(){
    this.interval.start = (this.paginator.page - 1) * this.paginator.numOptions;
    this.interval.end = this.interval.start + this.paginator.numOptions
    this.pageEmitter.emit(this.interval);
  }
}
