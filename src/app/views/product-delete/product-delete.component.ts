import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interface/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {

  public product: Product = {
    name: '',
    price: 0
  }

  constructor(
    private router: Router,
    private productService: ProductService,
    private actived: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.search()
  }

  public search() {
    const id: number | any = this.actived.snapshot.paramMap.get('id')
    this.productService.seach(id).subscribe(product => this.product = product)
  }

  public deletProduct(): void {
    this.productService.delet(this.product.id).subscribe(() => {
      console.log('produto excluido')
    })
    this.router.navigate(['/produtos'])
  }

  public cancel(): void {
   this.router.navigate(['/produtos'])
  }

}
