import { CommonModule } from "@angular/common";
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-cart-item",
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: "./cart-item.component.html",
  styleUrl: "./cart-item.component.scss",
})
export class CartItemComponent implements OnDestroy {
  @Input() id!: string;
  @Input() name!: string;
  @Input() size!: string;
  @Input() color!: string;
  @Input() price!: number;
  @Input() quantity!: number;
  @Input() productImage!: string;
  @Input() className!: string;
  @Output() productRemoved = new EventEmitter<string>();

  constructor() {}

  get total() {
    return this.price * (this.quantity ?? 1);
  }

  handleRemove() {
    this.productRemoved.emit(this.id);
  }

  ngOnDestroy() {
    console.log("CartItem ngOnDestroy", this.id);
  }
}
