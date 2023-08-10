import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbacksListComponent } from './Pages/feedbacks-list/feedbacks-list.component';
import { FeedbackDescriptionComponent } from './Pages/feedback-description/feedback-description.component';
import { FeedbackItemComponent } from './Elements/feedback-item/feedback-item.component';
import {HttpClientModule} from "@angular/common/http";
import {GlobalContext} from "../assets/GlobalContext";
import {FormsModule} from "@angular/forms";
import { NotificationComponent } from './Elements/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbacksListComponent,
    FeedbackDescriptionComponent,
    FeedbackItemComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GlobalContext],
  bootstrap: [AppComponent]
})
export class AppModule { }
