import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-review-form",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./review-form.component.html",
  styleUrl: "./review-form.component.scss",
})
export class ReviewFormComponent implements AfterContentInit, AfterViewInit {
  @ContentChild("formHeader") myHeader!: ElementRef<HTMLButtonElement>;
  @ViewChild("wrapper") wrapper!: ElementRef<HTMLButtonElement>;

  reviewContent: string = "";

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit", "wrapper", this.wrapper);
    console.log("ngAfterContentInit", "myHeader", this.myHeader);
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit", "wrapper", this.wrapper);
    console.log("ngAfterViewInit", "myHeader", this.myHeader);
  }

  handleFormSubmit(): void {
    console.log("Submitted review:", this.reviewContent);
    // You can send this to a service here
  }
}
