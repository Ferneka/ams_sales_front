import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { Category } from '../../category/models/Category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  getAllProducts() : Observable<Product[]>{
    return this.http.get<Product[]>
    (
      "http://localhost:5168/api/Product"
    )
  }
}
