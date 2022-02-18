import { Component } from '@angular/core';
import { MessagesStore } from '../../stores/messages.store';
import { MESSAGES } from '../../messagesDB';
@Component({
  selector: 'digital-team-exercise-sender',
  template: `
    <div class="container">
      <mat-list-item>
        <button mat-raised-button color="primary" (click)="showFirstMessage()">
          Message 1
        </button>
        <button mat-raised-button color="primary" (click)="showSecondMessage()">
          Message 2
        </button>
        <button mat-raised-button color="primary" (click)="showThirdMessage()">
          Message 3
        </button>
      </mat-list-item>
    </div>
  `,
  styleUrls: ['./sender.component.scss'],
})
export class SenderComponent {
  public messages = MESSAGES;

  constructor(public messageStore: MessagesStore) {}

  public updateMessage(message: string) {
    this.messageStore.updateMessage(message);
  }

  public showFirstMessage() {
    this.updateMessage(this.messages[0].content);
  }

  public showSecondMessage() {
    this.updateMessage(this.messages[1].content);
  }

  public showThirdMessage() {
    this.updateMessage(this.messages[2].content);
  }
}
