import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@NgModule({
  imports: [
    FormsModule,    //added here too
    ReactiveFormsModule //added here too
  ]
})
export class AppComponent {
  title = 'angularApp';
}
