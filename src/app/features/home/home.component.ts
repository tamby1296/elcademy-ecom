import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ProductComponent } from '../../components/product/product.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, HeaderComponent, ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  products: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/assets/data/shop.json').subscribe(( data => {
      this.products = data
    }));
  }

}
