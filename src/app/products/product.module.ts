import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StarComponent } from './../shared/star.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertToSpaces } from '../shared/convert-to-spaces.pipe';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-detail.guard';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpaces,
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: "products", component: ProductListComponent },
      { path: "products/:id",
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent}
    ])
  ]
})
export class ProductModule { }
