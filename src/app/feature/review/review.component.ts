import { Component } from "@angular/core";
import { ReviewFormComponent } from "../../components/review-form/review-form.component";
import { HeaderComponent } from "../../components/header/header.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-review",
  standalone: true,
  imports: [CommonModule, ReviewFormComponent, HeaderComponent],
  templateUrl: "./review.component.html",
  styleUrl: "./review.component.scss",
})
export class ReviewComponent {}
