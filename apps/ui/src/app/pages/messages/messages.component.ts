import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessagesStore } from '../../stores/messages.store';

@Component({
  selector: 'digital-team-exercise-messages',
  template: `
    <div class="container">
      <mat-card>
        <mat-card-content>
          <div class="mat-body-2">{{ messageFromSibling$ | async }}</div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  messageFromSibling$?: Observable<string>;
  DEFAULT_MESSAGE = 'Hit that buttons 👊';

  constructor(public messagesStore: MessagesStore) {}

  ngOnInit(): void {
    this.messageFromSibling$ = this.messagesStore.getMessage();
    this.messagesStore.updateMessage(this.DEFAULT_MESSAGE);
  }
}
