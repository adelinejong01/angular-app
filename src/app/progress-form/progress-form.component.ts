import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormsModule, FormControl} from '@angular/forms';
import { Payment, Income } from './payment.interface';

@Component({
  selector: 'app-progress-form',
  templateUrl: './progress-form.component.html',
  styleUrls: ['./progress-form.component.css'],
})

export class ProgressFormComponent  {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  public selectedPay : String;
  public selectedIncome : String;

  public payOptions: Payment[] = [
    { value: 'minimum', display: 'The minimum repayment' },
    { value: 'depends', display: 'Depends on the month' },
    { value: 'closing', display: 'All of the closing balance' },
];
public incomeRanges: Income[] = [
  { value: 'below', display: 'Below $25,000' },
  { value: '25to35', display: '$25,000 - $34,999' },
  { value: '35to75', display: '$35,000 - $74,999' },
  { value: 'above', display: 'Above $74,999' },
];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      formControlName: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      //secondCtrl: ['', Validators.required]
    });

  }

  selectionChanged(item) {
    this.selectedPay = item.value;

  }
  selectionChangedIncome(item){
    this.selectedIncome = item.value;
  }

  submitForm(){
    console.log(this.selectedPay +  "Selected value: " + this.selectedIncome);
    var recommendedtitle = "Prestige Qantas";
    var recommendedtext = "Directly earn unlimited Qantas Frequent Flyer Points and enjoy exclusive travel benefits";
    if(this.selectedPay== "minimum"){
      recommendedtitle="Simplicity";
      recommendedtext= "No late fees. No annual fee. Never ever. Plus, save with 0% p.a. for 6 months on balance transfers ";
      //document.getElementsByClassName('img-fluid')[0].setAttribute("src", "src/assets/img/simple.jpg");
    }else if(this.selectedIncome== "below"){
      recommendedtitle="Clear Platinum";
      recommendedtext= "A Low Rate card. Start saving on interest with a discounted 12.99% p.a. on retail purchases";
      //document.getElementsByClassName('img-fluid')[0].setAttribute("src", "src/assets/img/grocery.jpg");
  }  
  console.log(recommendedtitle+ " " +recommendedtext);
  document.getElementsByClassName('card-text py-2')[0].innerHTML = recommendedtext;
  document.getElementsByClassName('card-title')[0].innerHTML = recommendedtitle;
  }
}
