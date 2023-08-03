import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient,private router:Router) { }
  private url='  http://localhost:3000/'

  addproduct(product:any){
    return  this.http.post(this.url+'api/produit',product)
  }
  getAllProduct(){
    return  this.http.get(this.url+'api/produit')
  }
  deleteProduct(id:any){
    return this.http.delete(this.url+'api/produit/'+id)
  }
  updateProduct(id:any,data:any){
    return this.http.put(this.url+'api/produit/'+id,data)
  }
  getproducetbyid(id:any){
    return this.http.get(this.url+'api/produit/'+id)
   }
   getProductsbycategory(id:any){
    return this.http.get(this.url+'api/getProductsbycategory/'+id)
   }

   addToCart(product: any) {
    return this.http.post(this.url+'api/cart',product);
  }

  getCartItems() {
    return this.http.get(this.url+'api/cart');
  }
}
