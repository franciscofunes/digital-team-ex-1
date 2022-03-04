import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RandomNumberService } from '../shared/services/randomNumber.service';
import { SubSink } from 'subsink';

@Injectable({
  providedIn: 'root',
})
export class RandomNumbersStore implements OnDestroy {
  randomNumber$?: BehaviorSubject<number>;
  randomMultiple$?: BehaviorSubject<number>;
  private subs = new SubSink();

  constructor(private randomNumberService: RandomNumberService) {
    this.randomNumber$ = new BehaviorSubject(0);
    this.randomMultiple$ = new BehaviorSubject(0);
  }

  // Random Number
  fetchRandomNumber() {
    this.subs.sink = this.randomNumberService
      .getRandomNumber()
      .subscribe((result) => {
        console.log('Response received', result);
        this.randomNumber$?.next(result.randomNumber);
      });
  }

  getRandomNumber(): BehaviorSubject<number> {
    return this.randomNumber$ as BehaviorSubject<number>;
  }

  //Random Multiple
  fetchRandomMultiple(number: number) {
    this.subs.sink = this.randomNumberService
      .getRandomMultiple(number)
      .subscribe((result) => {
        console.log('Response received', result);
        this.randomMultiple$?.next(result.multipleRandomNumber);
      });
  }

  getRandomMultiple(): BehaviorSubject<number> {
    return this.randomMultiple$ as BehaviorSubject<number>;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
