import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get('http://localhost:8089/products');
  }

  checkProduct(product: any) {
    return this.http.patch(`http://localhost:8089/products/${product.id}`, {checked: !product.checked});
  }
}
