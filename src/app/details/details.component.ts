import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../servise/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product: any;

  constructor( private route: ActivatedRoute, private data: DataService ,private router:Router) {}
  
  id:any;
  article:any;
  ngOnInit():void{
    this.id=this.route.snapshot.paramMap.get('id');
    this.data.getproducetbyid(this.id).subscribe(
      res=>{
        this.article=res
      },
      err=>{}
    )

  }
   addToCart(): void {
    this.data.addToCart(this.article).subscribe(
      res => {
        this.router.navigate(['/panier'])
      },
      (error) => {
        console.error('Failed to add product to cart', error);
      }
    );
  }

}
