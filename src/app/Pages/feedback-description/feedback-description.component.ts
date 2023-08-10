import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {LongFeedback} from "../../Services/Interfaces/feedback";
import {FeedbackService} from "../../Services/feedback.service";
import {ActivatedRoute} from "@angular/router";
import {GlobalContext} from "../../../assets/GlobalContext";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-feedback-description',
  templateUrl: './feedback-description.component.html',
  styleUrls: ['./feedback-description.component.sass']
})
export class FeedbackDescriptionComponent implements  OnInit{
    feedback: Observable<LongFeedback> = new Observable<LongFeedback>();
    length: number = 0;
    constructor(private route: ActivatedRoute, private feedbackService: FeedbackService, public globalContext: GlobalContext) {}

  ngOnInit(): void {
        const id = this.route.snapshot.params['id'];
        if (id !== undefined) {
            this.feedback = this.feedbackService.getFeedbackById(id, this.globalContext.getLang()).pipe(map(response => {
                this.length = response.details.length;
                return response;
            }));
        }
  }


    getAllText(value: string, keyWord?: string) {
        const word = keyWord ? this.globalContext.getTranslationOfKey(keyWord) : '';
        return `${value} ${word}`;
    }

    getRowNumber(length: number, colNumber: number) {
        return Math.round(length / colNumber);
    }
}
