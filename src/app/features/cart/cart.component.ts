import { Component } from '@angular/core';
import { CartItemComponent } from '../../components/cart-item/cart-item.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CartItemComponent, HttpClientModule, HeaderComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
products: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/assets/data/cart.json').subscribe(( data => {
      this.products = data
    }));
  }
}
