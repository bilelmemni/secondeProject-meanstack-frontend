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

}
