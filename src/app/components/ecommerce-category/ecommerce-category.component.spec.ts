import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceCategoryComponent } from './ecommerce-category.component';

describe('EcommerceCategoryComponent', () => {
  let component: EcommerceCategoryComponent;
  let fixture: ComponentFixture<EcommerceCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommerceCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
