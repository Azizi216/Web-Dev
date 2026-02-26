import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {

  @Input() products: Product[] = [];  // 🚨 THIS FIXES YOUR ERROR

  shareProduct(product: Product) {
    alert(`Sharing ${product.name}`);
  }
}