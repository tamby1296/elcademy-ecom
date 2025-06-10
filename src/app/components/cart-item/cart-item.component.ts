import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  @Input() name!: string;
  @Input() size!: string;
  @Input() color!: string;
  @Input() price!: number;
  @Input() quantity!: number;
  @Input() productImage!: string;
  @Input() className!: string;

  get total() {
    return this.price * (this.quantity ?? 1);
  }

  constructor() {}

  removeFromCart() {
    console.log('Remove item');
  }
}
