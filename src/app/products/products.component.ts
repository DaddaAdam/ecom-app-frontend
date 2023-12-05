import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit
{
  products: Array<Product> = [];

  constructor(private http:HttpClient, private productService: ProductService) {

  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
    });
  }

  handleCheckProduct(product: Product) {
    this.productService.checkProduct(product).subscribe((data: any) => {
      product.checked = data.checked;
    });
  }

  handleDeleteProduct(product: Product) {
    this.productService.deleteProduct(product).subscribe((data: any) => {
      this.getProducts();
    });
  }

}
