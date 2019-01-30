import { Component, OnInit, Input } from '@angular/core';
import { FormDataService } from '../data/formData.service';

@Component({
  selector: 'app-registraion',
  templateUrl: './registraion.component.html'
})
export class RegistraionComponent implements OnInit {
  title = 'PARK HEAR';
  @Input() formData;
  
  constructor(private formDataService: FormDataService) {
  }

  ngOnInit() {
      this.formData = this.formDataService.getFormData();
      console.log(this.title + ' loaded!');
  }
}