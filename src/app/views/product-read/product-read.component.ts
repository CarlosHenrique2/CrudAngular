import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interface/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent implements OnInit {

  public products!: Product[]
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  public displayedColumns: string[] = ['name', 'price', 'actions'];
  public dataSource = this.products;

  constructor(
    private productService: ProductService,
    private router: Router
    ) {}

  ngOnInit(): void { 
    this.productService.read().subscribe(products => {
      this.dataSource = products
      console.log(products)
    })
  }

  public update(): void {
     this.router.navigate(['/produtos-update'])
  }

  public delet(): void {
    this.router.navigate(['/produtos-delet'])
 }

}
