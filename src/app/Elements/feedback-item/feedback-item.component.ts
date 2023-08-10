import {Component, Input} from '@angular/core';
import {GlobalContext} from "../../../assets/GlobalContext";

@Component({
  selector: 'elt-feedback-item',
  templateUrl: './feedback-item.component.html',
  styleUrls: ['./feedback-item.component.sass']
})
export class FeedbackItemComponent {
  @Input() indexInList: number = -1;
  @Input() descriptElt: boolean = false;
  @Input() fullname: string = "";
  @Input() picture_url: string = "";
  @Input() country: string="";
  @Input() specialty: string="";
  @Input() feedback: string="";
  @Input() phone: string = "";

  constructor(public globalContext: GlobalContext) {
  }
}
