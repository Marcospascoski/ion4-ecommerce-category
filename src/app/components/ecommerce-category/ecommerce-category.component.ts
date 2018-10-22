import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ecommerce-category',
  templateUrl: './ecommerce-category.component.html',
  styleUrls: ['./ecommerce-category.component.scss']
})
export class EcommerceCategoryComponent implements OnInit {
  @Input() title = 'title';
  @Input() items: Array<any> = [];
  items1: Array<any> = [];
  items2: Array<any> = [];
  @Output() itemSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.items.forEach((el, i) => {
      if (i < 5) {
        this.items1.push(el);
      } else {
        this.items2.push(el);
      }
    });
  }

  selectItem(item) {
    this.itemSelected.emit(item);
  }

}
