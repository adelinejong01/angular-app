import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CardTabsComponent } from './card-tabs/card-tabs.component';
import { ViewCardsComponent } from './view-cards/view-cards.component';
import { ProgressFormComponent } from './progress-form/progress-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    CardTabsComponent,
    ViewCardsComponent,
    ProgressFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
