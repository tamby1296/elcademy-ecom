import { Component, OnInit } from "@angular/core";
import { HeaderComponent } from "../../components/header/header.component";
import { ProductComponent } from "../../components/product/product.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HttpClientModule, HeaderComponent, ProductComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit {
  products: any;
  p = {
    image: "/assets/images/products/top_1.png",
    title: "Vertical Striped Shirt",
    rating: 3,
    price: 232,
    discount: 20,
  };
  isLoading = true;
  error: string | null = null;

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.http.get("/assets/data/shop.json").subscribe({
      next: (data) => {
        this.products = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = "Failed to load products.";
        console.error("Error loading products:", err);
        this.isLoading = false;
      },
    });
  }

  updateProduct() {
    console.log("tet");
    this.p.title = "New name";
  }
}
