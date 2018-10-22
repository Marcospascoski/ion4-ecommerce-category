import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ecommerce-category',
  templateUrl: './ecommerce-category.component.html',
  styleUrls: ['./ecommerce-category.component.scss']
})
export class EcommerceCategoryComponent implements OnInit {
  @Input() title = 'title';
  @Input() itemPerLine = 5;
  @Input() items: Array<any> = [];
  @Output() itemSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  selectItem(item) {
    this.itemSelected.emit(item);
  }

}
