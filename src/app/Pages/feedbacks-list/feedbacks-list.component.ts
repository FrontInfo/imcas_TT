import {Component, OnInit} from '@angular/core';
import {FeedbackService} from "../../Services/feedback.service";
import {ShortFeedback} from "../../Services/Interfaces/feedback";
import {Observable} from "rxjs";
import {GlobalContext} from "../../../assets/GlobalContext";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-feedbacks-list',
  templateUrl: './feedbacks-list.component.html',
  styleUrls: ['./feedbacks-list.component.sass']
})
export class FeedbacksListComponent implements OnInit {
  public feedbacks: Observable<ShortFeedback[]> =  new Observable<ShortFeedback[]>();
  constructor(private feedbackService: FeedbackService, public globalContext: GlobalContext) {
  }

  ngOnInit(): void {
    this.feedbacks = this.feedbackService.getAllFeedbacks(this.globalContext.getLang()).pipe(
        map((response: ShortFeedback[]) => response.filter(shortFeedback => shortFeedback.feedback !== "") ));
  }
}
