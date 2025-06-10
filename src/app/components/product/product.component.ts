import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() rating!: number;
  @Input() price!: number;
  @Input() discount?: number;
  @Input() className = '';

  createArray(length: number): any[] {
    return Array.from({ length });
  }

  getDiscountedPrice(price: number, discount?: number): number {
    return discount ? price - (price * discount) / 100 : price;
  }
}