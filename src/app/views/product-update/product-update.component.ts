import { Component, InputDecorator, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interface/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {
  
  public product: Product = {
    name: '',
    price: 0
  }

  constructor(
    private productService: ProductService,
    private actived: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.search()    
  }

  public search() {
    const id: number | any = this.actived.snapshot.paramMap.get('id')
    console.log(id)
    this.productService.seach(id).subscribe(product => this.product = product)
  }

  public updateProduct(): void {
    const id: number | any = this.actived.snapshot.paramMap.get('id')
    this.productService.update(id, this.product).subscribe((product) => {
      this.product = product
    })
    this.router.navigate(['/produtos'])
  }

  public return() {
    this.router.navigate(['/produtos'])
  }
 

}


