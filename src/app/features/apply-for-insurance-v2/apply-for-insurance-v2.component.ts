import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuestionCardComponent } from './question-card/question-card.component';
import { CategoriesComponent } from './categories/categories.component';

@Component({
  selector: 'app-apply-for-insurance-v2',
  standalone: true,
  imports: [RouterModule, QuestionCardComponent,CategoriesComponent],
  templateUrl: './apply-for-insurance-v2.component.html',
  styleUrl: './apply-for-insurance-v2.component.css'
})
export class ApplyForInsuranceV2Component {

}
