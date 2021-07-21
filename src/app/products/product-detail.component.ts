import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }

  product: IProduct | undefined;
  pageTitle: string = "Product Detail"

  ngOnInit(): void {
    const productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${productId}`;
    this.productService.getProduct(productId).subscribe({
      next: product => this.product = product,
      error: err => console.log(err)
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
