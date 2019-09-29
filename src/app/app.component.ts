import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators} from '@angular/forms';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppComponent {
  title = 'angularApp';
   
  navLinks = [ {path: "viewcards", label: "View Cards"}, {path: "progressform", label: "Help Me Choose"}

  ];
}
