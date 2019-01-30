import { Injectable }                        from '@angular/core';

import { FormData, Personal, Address, Work}       from './formData.model';
import { WorkflowService }                   from '../workflow/workflow.service';
import { STEPS }                             from '../workflow/workflow.model';


@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isPersonalFormValid: boolean = false;
    private isWorkFormValid: boolean = false;
    private isAddressFormValid: boolean = false;

    constructor(private workflowService: WorkflowService) { 
    }

    getPersonal(): Personal {
        // Return the Personal data
        var personal: Personal = {
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            email: this.formData.email,
            tel:this.formData.tel,
            nic:this.formData.nic,
            password:this.formData.password,
            confirmPassword:this.formData.confirmPassword
        };
        return personal;
    }

    setPersonal(data: Personal) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.email = data.email;
        this.formData.tel=data.tel;
        this.formData.nic=data.nic;
        this.formData.password=data.password;
        this.formData.confirmPassword=data.confirmPassword;
       
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(STEPS.personal);
    }

    getWork() : Work {
        // Return the work type
        var work:Work={
            freeland:this.formData.freeland,
            sheltered:this.formData.sheltered,
            car:this.formData.car,
            bus:this.formData.bus,
            bicycle:this.formData.bicycle,
            van:this.formData.van,
            lorry:this.formData.lorry,
            other:this.formData.other,
            mweight:this.formData.mweight,
            mheight:this.formData.mheight,
            vehicles:this.formData.vehicles
        
        }
        return work;
    }
    
    setWork(data: Work) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkFormValid = true;
        this.formData.freeland=data.freeland;
        this.formData.sheltered=data.sheltered;
        this.formData.car=data.car;
        this.formData.bus=data.bus;
        this.formData.bicycle=data.bicycle;
        this.formData.van=data.van;
        this.formData.lorry=data.lorry;
        this.formData.other=data.other;
        this.formData.mheight=data.mheight;
        this.formData.mweight=data.mweight;
        this.formData.vehicles=data.vehicles;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(STEPS.work);
    }

    getAddress() : Address {
        // Return the Address data
        var address: Address = {
            street: this.formData.street,
            city: this.formData.city,
            state: this.formData.state,
            zip: this.formData.zip
        };
        return address;
    }

    setAddress(data: Address) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isAddressFormValid = true;
        this.formData.street = data.street;
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.zip = data.zip;
        // Validate Address Step in Workflow
        this.workflowService.validateStep(STEPS.address);
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
                this.isWorkFormValid && 
                this.isAddressFormValid;
    }
}