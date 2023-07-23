import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servise/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  validation=false
  formgroup:FormGroup=new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.minLength(5)]),
  })

  token:any;
  log(){
    this.validation=true
  if (this.formgroup.invalid) {
    return
  }
    this.auth.addlogine(this.formgroup.value).subscribe(
      res=>{
        this.token=res;
        //{myToken:'jnzedjzj'}
        localStorage.setItem('token',this.token.mytoken)
        this.router.navigate(['/home'])
      },err=>{
      console.log(err);
      
    }
    )
  }

}
