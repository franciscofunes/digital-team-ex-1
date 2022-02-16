import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RandomNumberService } from '../services/randomNumber.service';

@Injectable({
  providedIn: 'root',
})
export class RandomNumbersStore {
  randomNumber$?: BehaviorSubject<number>;
  errorMessage?: string;

  constructor(private randomNumberService: RandomNumberService) {
    this.randomNumber$ = new BehaviorSubject(0);
  }

  fetchRandomNumber() {
    this.randomNumberService.getRandomNumber().subscribe((result) => {
      console.log('Response received', result);
      this.randomNumber$?.next(result.randomNumber);
    });
  }

  getRandomNumber(): BehaviorSubject<number> {
    return this.randomNumber$ as BehaviorSubject<number>;
  }
}
