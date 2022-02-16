import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesStore {
  public messageSource$: BehaviorSubject<string>;

  constructor() {
    this.messageSource$ = new BehaviorSubject('');
  }

  getMessage(): BehaviorSubject<string> {
    return this.messageSource$;
  }

  updateMessage(message: string) {
    this.messageSource$.next(message);
  }
}
