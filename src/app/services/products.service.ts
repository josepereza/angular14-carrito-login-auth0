import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product} from '../interfaces/product'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
  }
}
