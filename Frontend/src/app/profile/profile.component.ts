import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../servers/regservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userDetails;
  constructor(private service: RegserviceService) { }

  ngOnInit() {
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        console.log("Pro"+res);
      },
      err => { 
        console.log(err);
        
      });
  }

}
