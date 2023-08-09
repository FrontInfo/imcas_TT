import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbacksListComponent } from './Pages/feedbacks-list/feedbacks-list.component';
import { FeedbackDescriptionComponent } from './Pages/feedback-description/feedback-description.component';
import { FeedbackItemComponent } from './Elements/feedback-item/feedback-item.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    FeedbacksListComponent,
    FeedbackDescriptionComponent,
    FeedbackItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
