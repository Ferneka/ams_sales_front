import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, importProvidersFrom } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) { }
  
  getAllCategories() : Observable<Category[]> {
    //retorna conectando com a api, esse retorno tem um array de categorias
    return this.http.get<Category[]>(
      "http://localhost:5168/api/Category"
    )
  }
}
