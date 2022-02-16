import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RandomNumbersStore } from '../stores/randomNumbers.store';
// import { Observable } from 'rxjs';
// import { RandomNumberService } from '../services/randomNumber.service';

@Component({
  selector: 'digital-team-exercise-random',
  template: `
    <div class="container">
      <p class="body-1">{{ randomNumber$ | async }}</p>
      <button mat-raised-button color="warn" (click)="fetchRandomNumber()">
        🎲
      </button>
    </div>
  `,
  styleUrls: ['./random.component.scss'],
})
export class RandomComponent implements OnInit {
  dataLoading$ = true;
  randomNumber$?: Observable<number>;
  constructor(private randomNumbersStore: RandomNumbersStore) {}

  public fetchRandomNumber() {
    this.randomNumbersStore.fetchRandomNumber();
  }

  ngOnInit(): void {
    this.randomNumber$ = this.randomNumbersStore.getRandomNumber();
  }
}
