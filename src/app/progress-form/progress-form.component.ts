import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-progress-form',
  templateUrl: './progress-form.component.html',
  styleUrls: ['./progress-form.component.css'],
})

export class ProgressFormComponent {
  paymentForm;
  constructor(){}
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
