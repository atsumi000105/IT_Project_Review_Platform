import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../servers/regservice.service';

import { Router } from "@angular/router";
@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.css']
})
export class RegisComponent implements OnInit {

  model ={
    password :'',
    confirmnewPassword:'',
    email:'',
    firstName:'',
    lastName:'',
    age:''

  };
  constructor(private service: RegserviceService, private router: Router) { }

  ngOnInit() {
  }
msg;
  onSubmit(){
console.log(this.model)
    this.service.fromdata(this.model).subscribe(
      res => {
        this.router.navigate(['login']);
        this.msg='Registration is successfull'
        this.model.password ='',
        this.model.confirmnewPassword='',
        this.model.email='',
        this.model.firstName='',
        this.model.lastName='',
        this.model.age=''
        },
      
      err => {
        console.log(err)
                {if(err) this.msg='Your email is already exists';}
      }
    );
  }
}
