import { Component } from '@angular/core';
import { ReviewFormComponent } from '../../components/review-form/review-form.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [ReviewFormComponent, HeaderComponent],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {

}
