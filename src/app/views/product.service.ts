import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interface/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public baseUrlUp = 'http://localhost:3001/products'
  public product!: Product

  constructor(private http: HttpClient) { }

  public createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(environment.urlProducts, product)
  }

  public read(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.urlProducts)
  }

  public seach(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrlUp}/${id}`)
  }

  public update(id: number, product: Product): Observable<Product> {
    const url = `${this.baseUrlUp}/${id}`
    return this.http.put<Product>(url, product)
  }

  public delet(id: any ): Observable<Product> {
    const url = `${this.baseUrlUp}/${id}`
    return this.http.delete<Product>(url)
  }

}
