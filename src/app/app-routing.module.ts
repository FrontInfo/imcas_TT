import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FeedbacksListComponent} from "./Pages/feedbacks-list/feedbacks-list.component";
import {FeedbackDescriptionComponent} from "./Pages/feedback-description/feedback-description.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/feedbacks',
    pathMatch: 'full'
  },
  {
    path: 'feedbacks',
    component: FeedbacksListComponent
  },
  {
    path: 'feedbacks/:id',
    component: FeedbackDescriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
