export class FormData {
    firstName: string = '';
    lastName : string = '';
    email: string = '';
    tel: string = '';
    nic:string='';
    password:string='';
    confirmPassword:string='';
    freeland:string='';
    sheltered:string='';
    car:string='';
    bus:string='';
    bicycle:string='';
    van:string='';
    lorry:string='';
    other:string='';
    mweight:string='';
    mheight:string='';
    vehicles:string='';
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';

    clear() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.tel = '';
        this.nic='';
        this.password='';
        this.confirmPassword='';
        this.freeland='';
        this.sheltered='';
        this.car='';
        this.bus='';
        this.bicycle='';
        this.van='';
        this.lorry='';
        this.other='';
        this.mweight='';
        this.mheight='';
        this.vehicles='';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
}

export class Personal {
    firstName: string = '';
    lastName : string = '';
    email: string = '';
    tel: string = '';
    nic:string='';
    password:string='';
    confirmPassword:string='';
   
}

export class Address {
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
}

export class Work{
    freeland:string='';
    sheltered:string='';
    car:string='';
    bus:string='';
    bicycle:string='';
    van:string='';
    lorry:string='';
    other:string='';
    mweight:string='';
    mheight:string='';
    vehicles:string='';
}