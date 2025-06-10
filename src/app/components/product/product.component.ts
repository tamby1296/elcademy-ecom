import { CommonModule } from "@angular/common";
import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-product",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./product.component.html",
  styleUrl: "./product.component.scss",
})
export class ProductComponent implements OnChanges, DoCheck {
  @Input() image!: string;
  @Input() title!: string;
  @Input() rating!: number;
  @Input() price!: number;
  @Input() discount = 0;
  @Input() className = "";
  isFavourite = false;

  createArray(length: number): any[] {
    return Array.from({ length });
  }

  get finalDiscount() {
    return this.isFavourite ? this.discount + 20 : this.discount;
  }

  getDiscountedPrice(price: number, discount?: number): number {
    let finalDiscount = discount ?? 0;
    if (this.isFavourite) finalDiscount += 20;

    return price - (price * finalDiscount) / 100;
  }

  toggleIsFavourite() {
    this.isFavourite = !this.isFavourite;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges", changes);
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
}
