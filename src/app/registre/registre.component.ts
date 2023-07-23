import { Component, OnInit } from '@angular/core';
import { DataService } from '../servise/data.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../servise/auth.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {

 

  ngOnInit(): void {
  }
  constructor( private servise:AuthService ,private router:Router ){}
  validation=false
  formgroup:FormGroup=new FormGroup({
    firstname:new FormControl("",[Validators.required]),
    lastname:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.minLength(5)]),
  })
add(){
this.validation=true
if (this.formgroup.invalid) {
  return
}
console.log(this.formgroup.value)
this.servise.addRegister(this.formgroup.value).subscribe(
  res=>{
    console.log(res)
    this.router.navigate(['/login'])
  },err=>{
    console.log(err)
  }
)
}

}
