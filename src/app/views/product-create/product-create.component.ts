import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interface/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  public product: Product = {
    name: '',
    price: 0
  }

  constructor(
    private serviceProduct: ProductService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  public createProduct(): void {
    this.serviceProduct.createProduct(this.product).subscribe(() => {
      this.router.navigate(['/produtos'])
    })
  }

  public cancel() {
    this.router.navigate(['/produtos'])
  }

}
