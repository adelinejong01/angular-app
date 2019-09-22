import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MaterialModule} from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CardTabsComponent } from './card-tabs/card-tabs.component';
import { ViewCardsComponent } from './view-cards/view-cards.component';
import { ProgressFormComponent } from './progress-form/progress-form.component';
import { RouterModule } from '@angular/router';
import { NotificationComponent } from './notification/notification.component';
import { CardDetailsComponent } from './card-details/card-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    CardTabsComponent,
    ViewCardsComponent,
    ProgressFormComponent,
    NotificationComponent,
    CardDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot([
  { path: 'viewcards', component: ViewCardsComponent },
  { path: 'cards/:cardId', component: CardDetailsComponent },
  { path: 'progressform', component: ProgressFormComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
