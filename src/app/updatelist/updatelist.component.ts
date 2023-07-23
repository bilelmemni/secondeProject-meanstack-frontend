import { Component, OnInit } from '@angular/core';
import { DataService } from '../servise/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatelist',
  templateUrl: './updatelist.component.html',
  styleUrls: ['./updatelist.component.css']
})
export class UpdatelistComponent implements OnInit {

  constructor(public data:DataService,private router:Router, private act:ActivatedRoute) { }

 
  id:any;
  ngOnInit():void{
    this.id=this.act.snapshot.paramMap.get('id')  //na9raw id mte3 kol product
    this.data.getproducetbyid(this.id).subscribe(
      res=>{
        console.log(res)
        this.formgroup.patchValue(res)
        
      },err=>{
        console.log(err)
      }
    )
  }
  validation=false
  formgroup:FormGroup=new FormGroup({
   name:new FormControl('',[Validators.required]),
   price:new FormControl('',[Validators.required,]),
   discription:new FormControl('',[Validators.required]),
   quantity:new FormControl('',[Validators.required]),
   image:new FormControl('',[Validators.required])
  })
  image:any;
  select(e:any){
    this.image=e.target.files[0]
    
  }
  

  update(){
    let fd=new FormData()
    fd.append('name',this.formgroup.value.name)
    fd.append('price',this.formgroup.value.price.toString())
    fd.append('discription',this.formgroup.value.discription)
    fd.append('quantity',this.formgroup.value.quantity.toString())
    fd.append('image',this.image)
   

    this.data.updateProduct(this.id,fd).subscribe(
      res=>{
        this.router.navigate(['/listProduct'])
      },err=>{
        console.log(err)
      }
    )
  }

}
