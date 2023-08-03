import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servise/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(private auth:AuthService,private act:ActivatedRoute){}
  id:any;
  author:any;
  ngOnInit():void{
    this.id=this.act.snapshot.paramMap.get('id')
    this.auth.getauthById(this.id).subscribe(
      res=>{
        this.author=res;  // 7ata data eli 3ana fil author lkol fi author:any
      },err=>{
        console.log(err);
        
      }
    );

}
}
