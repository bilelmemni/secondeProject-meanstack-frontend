import { Component, OnInit } from '@angular/core';
import { DataService } from '../servise/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(private data:DataService, public router:Router) { }

  products:any
  ngOnInit():void{
    this.data.getAllProduct().subscribe(
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


