import {Component, Input} from '@angular/core';

@Component({
  selector: 'elt-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass']
})
export class NotificationComponent {
  @Input() message: string = "";
}
