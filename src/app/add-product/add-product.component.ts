import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../servise/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(public data:DataService,public router:Router ) { }

  ngOnInit(): void {
  }
  validation=false
  formgroup:FormGroup=new FormGroup({
    categorie:new FormControl('',[Validators.required]),
   name:new FormControl('',[Validators.required]),
   price:new FormControl('',[Validators.required,]),
   discription:new FormControl('',[Validators.required]),
   quantity:new FormControl('',[Validators.required])
  })
  image:any;
  select(e:any){
    this.image=e.target.files[0]
    
  }
  

  add(){
    let fd=new FormData()
    fd.append('categorie',this.formgroup.value.categorie)
    fd.append('name',this.formgroup.value.name)
    fd.append('price',this.formgroup.value.price.toString())
    fd.append('discription',this.formgroup.value.discription)
    fd.append('quantity',this.formgroup.value.quantity.toString())
    fd.append('image',this.image)
    this.validation=true;
    if (this.formgroup.invalid) {
      return
    }

    this.data.addproduct(fd).subscribe(
      res=>{
        this.router.navigate(['/listProduct'])
      },err=>{
        console.log(err)
      }
    )
  }

}
