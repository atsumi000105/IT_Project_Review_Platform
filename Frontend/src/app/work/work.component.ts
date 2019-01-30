import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';

import { FormDataService }     from '../data/formData.service';
import { Work } from '../data/formData.model';

@Component ({
    selector:     'mt-wizard-work'
    ,templateUrl: './work.component.html'
})

export class WorkComponent implements OnInit {
    title = 'Enter your park information';
    work: Work;
    form: any;
    
    constructor(private router: Router, private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.work = this.formDataService.getWork();
        console.log('Work feature loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
        
        this.formDataService.setWork(this.work);
        return true;
    }

    goToPrevious(form: any) {
        if (this.save(form)) {
            // Navigate to the personal page
            this.router.navigate(['reg/personal']);
        }
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the address page
            this.router.navigate(['reg/address']);
        }
    }
}