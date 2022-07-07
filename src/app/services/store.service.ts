import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../interfaces/product';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  user:any={}
  isAuthenticated: boolean;

private myCart=new Subject<Product[]>();
myCart$=this.myCart.asObservable();
myList:Product[]=[]
total:number=0

constructor(private authService: AuthService) {
this.isAuthenticated = false;
}



  addProduct(product: Product) {
    this.myList.push(product);
   
   
    
   
       this.total=(this.total+product.price)
   
   
    this.myCart.next(this.myList);
  }
}
