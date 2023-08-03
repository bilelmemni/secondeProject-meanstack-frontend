import { Component, OnInit } from '@angular/core';
import { DataService } from '../servise/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor(private data:DataService, public router:Router) { }

  products:any
  ngOnInit():void{
    this.data.getCartItems().subscribe(
      res=>{
        this.products=res
      },err=>{
        console.log(err);
        
      }
    )
  }
delete(id:any){
  this.data.deleteProduct(id).subscribe(
    res=>{
      this.ngOnInit()
    },
    err=>{
      console.log(err);
      
    }
  )
}

}
