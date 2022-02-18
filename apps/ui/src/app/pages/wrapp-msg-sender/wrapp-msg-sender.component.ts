import { Component } from '@angular/core';

@Component({
  selector: 'digital-team-exercise-wrapp-msg-sender',
  template: `
    <digital-team-exercise-messages></digital-team-exercise-messages>
    <digital-team-exercise-sender></digital-team-exercise-sender>
  `,
  styleUrls: ['./wrapp-msg-sender.component.css'],
})
export class WrappMsgSenderComponent {}
