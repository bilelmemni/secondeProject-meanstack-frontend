import { Component, OnInit } from '@angular/core';
import { DataService } from '../servise/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor( private data: DataService ) { }
    
    Searchtext:any;
    products:any;
    category:any;

    ngOnInit():void{
      this.getproduct()
      this.getcategory()
    }
    getcategory(){
      this.data.getAllProduct().subscribe(
        res=>{
          this.category=res
        },err=>{
          console.log(err);
          
        }
      )
    }
    getproduct(){
      this.data.getAllProduct().subscribe(
        res=>{
          this.products=res
        },err=>{
          console.log(err);
          
        }
      )
    }
  
    filter(event:any){
      let value=event.target.value;
      if (value == "all") {
        this.getproduct()
      } else{
        this.getproductcaregory(value)  //7atina fil getproductby vategorie value mte3 select eli balise eli 3ana
      }
      
    }
    getproductcaregory(id:any){
      this.data.getProductsbycategory(id).subscribe(
        res=>{
          this.products=res
        },err=>{
          console.log(err);
          
        }
      )
    }

}
