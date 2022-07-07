import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';
import {Product} from '../../interfaces/product'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
productos:Product[]=[]
  constructor(private productsService:ProductsService, public storeService:StoreService) { }

  ngOnInit(): void {
this.productsService.getProducts().subscribe((data:Product[])=>{
  this.productos=data;
  console.log(data)
})
  }
agregar(item:Product){
 this.storeService.addProduct(item)
}
}
