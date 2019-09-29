import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-progress-form',
  templateUrl: './progress-form.component.html',
  styleUrls: ['./progress-form.component.css'],
})

export class ProgressFormComponent  {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({

      //firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      //secondCtrl: ['', Validators.required]
    });

  }

  form1(str1){
    console.log(str1);
  }



  
 
}
