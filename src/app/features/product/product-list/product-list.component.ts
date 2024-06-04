import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from '../service/product.service';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
   products? : Product[]
   constructor(private productService : ProductService){

   }
   ngOnInit(): void {
       this.productService.getAllProducts()
       .subscribe({
        next : (response) => {
          this.products = response;
        }
       })
   };
}
