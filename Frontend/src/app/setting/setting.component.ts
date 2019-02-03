import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../servers/regservice.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
  providers:[RegserviceService]
})
export class SettingComponent implements OnInit {

  



  
  public userDetails;
  public profileForm: FormGroup; 
  public settingForm: FormGroup; 
  user_name;
email;
password;
studied;
 work_place;


 

  constructor(
    public fb: FormBuilder,
    public service: RegserviceService,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        console.log("Pro" + JSON.stringify(this.userDetails));
        this.settingForm = this.fb.group({
          user_name: [this.userDetails.firstName, [Validators.required]], 
          email:[this.userDetails.email, [Validators.required]], 
          studied:[this.userDetails.studied, [Validators.required]], 
          work_place:[this.userDetails.work_place, [Validators.required]], 
          age:[this.userDetails.age, [Validators.required]], 
        });
        console.log("evetn data + "+ JSON.stringify(this.settingForm.value));
      },
      err => {
        console.log(err);

      });
     // this.settingForm.value.user_name = this.userDetails.firstName;
      //this.settingForm.value.email = this.userDetails.emaill;
      
      
     

      
  }

  onSubmit(){
    console.log("userid form values : "+ JSON.stringify(this.settingForm.value));
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        console.log("Pro" + JSON.stringify(this.userDetails));
        
        console.log("evetn data + "+ JSON.stringify(this.settingForm.value));
      },
      err => {
        console.log(err);
        
      });
      console.log(this.settingForm.value);
    this.service.putUser(this.settingForm.value,this.userDetails._id).subscribe((res) => {
      console.log(res);
      this.service.getUserProfile().subscribe(
        res => {
          this.userDetails = res['user'];
        },
        err => {
          console.log(err);
  
        });
    });
    
  }
  
}


