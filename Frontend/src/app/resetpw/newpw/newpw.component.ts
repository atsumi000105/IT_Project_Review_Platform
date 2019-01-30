import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { RegserviceService } from '../../servers/regservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newpw',
  templateUrl: './newpw.component.html',
  styleUrls: ['./newpw.component.css']
})
export class NewpwComponent implements OnInit {
  model ={
    newpassword :'',
    confirmnewPassword:'',
    email:'',
  };
  constructor(private service: RegserviceService, private router: Router,private route: ActivatedRoute) { }
 private id: String;
  private sub: any;
 emai;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['token'];});
      console.log(this.id)
    this.service.newpassword(this.id).subscribe(
      res => {
       // console.log(res);
        this.emai=res['user'];
        this.model.email=this.emai.email;
        console.log(this.model.email);

      },
      err => { 
        console.log(err);
        
      });
  }
msg;
  onSubmit(){console.log(this.model);
    this.service.savepassword(this.model).subscribe(
      
      res => {
        console.log(res);
        if(res['sucsess']==false){
          this.msg=res['message'];
          this.router.navigate(['login']);
        }else{
         this.model.newpassword ='';
         this.model.confirmnewPassword='';
         
          this.msg=res['message'];

        }
      },
      err => {
        console.log(err);
        this.msg='';
      }
    );
  }
}
