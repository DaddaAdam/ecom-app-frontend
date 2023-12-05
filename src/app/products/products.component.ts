import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

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

  constructor(private http:HttpClient) {

  }

  ngOnInit(): void {
    this.http.get('http://localhost:8089/products').subscribe((data: any) => {
      this.products = data;
    });
  }


  handleCheckProduct(product: any) {
    this.http.patch(`http://localhost:8089/products/${product.id}`, {checked: !product.checked})
      .subscribe((data: any) => {
      product.checked = data.checked;
    }
    );
  }

}
