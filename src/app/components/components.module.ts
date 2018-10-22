import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EcommerceCategoryComponent } from './ecommerce-category/ecommerce-category.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule.forRoot(),
    ],
    declarations: [
        EcommerceCategoryComponent
    ],
    exports: [
        EcommerceCategoryComponent
    ],
    entryComponents: [],
})
export class ComponentsModule { }
