import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-review-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.scss'
})
export class ReviewFormComponent {
  reviewContent: string = '';

  handleFormSubmit(): void {
    console.log('Submitted review:', this.reviewContent);
    // You can send this to a service here
  }
}
