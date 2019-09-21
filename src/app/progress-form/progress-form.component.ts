import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cards } from '../cards.component';
import { FormBuilder } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-progress-form',
  templateUrl: './progress-form.component.html',
  styleUrls: ['./progress-form.component.css'],
})

export class ProgressFormComponent  {
  paymentForm;
 
 
    /*private formBuilder: FormBuilder,
    ) {

      this.paymentForm = this.formBuilder.group({
        name: '',
        address: ''
      });
    }
    onSubmit(customerData) {
      console.warn('Your order has been submitted', customerData);
      this.paymentForm.reset();
    } */
  
}
