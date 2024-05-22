import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {

  categories?: Category[];

  constructor(private categoryService : CategoryService){

  }

  // ngOnInit(): void {
  //   this.categoryService.getAllCategories()
  //   .subscribe({
  //     next : (response) => {
  //       this.categories = response;
  //     }

  //   })
  // };

}


