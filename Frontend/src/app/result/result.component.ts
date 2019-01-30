import { Component, OnInit, Input }   from '@angular/core';

import { FormData }                   from '../data/formData.model';
import { FormDataService }            from '../data/formData.service';
import { FormsModule, NgModel, NgForm } from '@angular/forms';
import { RegserviceService } from '../servers/regservice.service';

@Component ({
    selector:     'mt-wizard-result'
    ,templateUrl: './result.component.html'
})

export class ResultComponent implements OnInit {
    title = '';
    @Input() formData: FormData;
    isFormValid: boolean = false;
    a='';
    b='';
    
    constructor(private formDataService: FormDataService,private reg:RegserviceService) {
    }
    

    ngOnInit() {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
        console.log('Result feature loaded!');
    }

    submit() {
       // alert('Excellent Job!');
        console.log(this.formData);
        this.reg.storedetails()
            .subscribe(
                (response)=>{if(response){
                    this.formData = this.formDataService.resetFormData();
                    this.isFormValid = false;
                    this.a="You Now Park Owner!"
                    this.title = 'thank you!';
                }
                
                }
                ,
                (error)=>{console.log(error)
                {if(error) this.b='Your email is already exists';}}
              );
              
     
    }
}


