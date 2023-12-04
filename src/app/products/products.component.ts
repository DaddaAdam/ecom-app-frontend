import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

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
export class ProductsComponent {
  products: Array<any> = [
    {id: 1, name: 'Computer', price: 9000, checked: false},
    {id: 2, name: 'Printer', price: 6000, checked: true},
    {id: 3, name: 'Smartphone', price: 12000, checked: false},

  ]

  handleCheckProduct(product: any) {
    product.checked = !product.checked;
  }
}
