import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CategoriesService } from '../../services/categories.service';
import { Router } from '@angular/router';
@Component({
  selector: 'Healthcategory',
  standalone: true,
  imports: [TableModule, ButtonModule, CommonModule, FormsModule],
  templateUrl: './sub-category.component.html',
  styleUrl: './sub-category.component.css',
})
export class SubCategoryHealthComponent {

 

  data: any;
 

  ngOnInit() {
    this.categoriesService.getCategories('http://localhost:5028/api/HealthInsurance/GetHealthInsurance').subscribe((data) => {
      this.data = data;
      console.log(data);
     
    });
  }
  constructor(private router: Router, private categoriesService: CategoriesService) {}
  goBack(): void {
    this.router.navigate(['/Insurance']); 
  }

  
}
