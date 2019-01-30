import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import {RegserviceService } from '../servers/regservice.service';

@Component({
  selector: 'signIn',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private service:RegserviceService,private router:Router) { }

  model ={
    email :'',
    password:''
  };
  serverErrorMessages: string;
  ngOnInit() {
    if(this.service.isLoggedIn())
    this.router.navigateByUrl('/userprofile');
  }

  onSubmit(form : NgForm){
    this.service.login(form.value).subscribe(
      res => {
        this.service.setToken(res['token']);
        this.router.navigateByUrl('/userprofile');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

}
