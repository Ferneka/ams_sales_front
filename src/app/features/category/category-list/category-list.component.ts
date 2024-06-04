import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Category } from '../models/Category';
import { CategoryService } from '../services/category.service';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
//deriva de oninit, quando eu inicio um componente o primeiro que ele entra é no oninit
export class CategoryListComponent implements OnInit{

  categories?: Category[]

  constructor(private categoryService : CategoryService){

  }

    ngOnInit(): void {
      console.log("ola-dona-fernanda");
      
      this.categoryService.getAllCategories()
      .subscribe({
        //response tem todas as categorias
        next : (response) => {
          console.log(response);
          this.categories = response;
        }

      })
    };

}


