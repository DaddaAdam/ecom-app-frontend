import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";

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
  products: Array<any> = [];

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

  handleCheckProduct(product: any) {
    this.productService.checkProduct(product).subscribe((data: any) => {
      product.checked = data.checked;
    });
  }

}
