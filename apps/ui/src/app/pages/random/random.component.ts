import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { RandomNumbersStore } from '../../stores/randomNumbers.store';

@Component({
  selector: 'digital-team-exercise-random',
  template: `
    <div class="container">
      <section class="random">
        <mat-card>
          <mat-card-title
            >Click the dice and generate a random number</mat-card-title
          >
          <mat-card-content>
            <p class="body-1">{{ randomNumber$ | async }}</p>
            <button
              class="btn-dice"
              mat-raised-button
              color="warn"
              (click)="fetchRandomNumber()"
            >
              🎲
            </button>
          </mat-card-content>
        </mat-card>
      </section>

      <section class="multiple">
        <mat-card>
          <mat-card-title
            >Enter a number and generate a random multiple</mat-card-title
          >
          <mat-card-content>
            <form
              [formGroup]="form"
              (submit)="fetchRandomMultiple()"
              autocomplete="off"
            >
              <div>
                <mat-form-field appearance="standard">
                  <mat-label>Number</mat-label>
                  <input
                    type="number"
                    name="number"
                    matInput
                    placeholder="Write your number..."
                    formControlName="number"
                    required
                  />
                  <mat-icon matSuffix>swap_vertical_circle</mat-icon>
                  <mat-error *ngIf="number?.hasError('required')">
                    Please enter at least one digit number
                  </mat-error>
                  <mat-error *ngIf="number?.hasError('min')">
                    0 is not a valid option
                  </mat-error>
                </mat-form-field>
              </div>

              <div>
                <button
                  class="calculate-btn"
                  mat-raised-button
                  color="primary"
                  type="submit"
                  [disabled]="!form.valid"
                >
                  Calculate
                </button>
              </div>
            </form>
            <p class="body-2">Multiple: {{ randomMultiple$ | async }}</p>
          </mat-card-content>
        </mat-card>
      </section>
    </div>
  `,
  styleUrls: ['./random.component.scss'],
})
export class RandomComponent implements OnInit {
  randomNumber$?: Observable<number>;
  randomMultiple$?: Observable<number>;
  form!: FormGroup;

  constructor(
    private randomNumbersStore: RandomNumbersStore,
    private fb: FormBuilder
  ) {}

  public fetchRandomNumber() {
    this.randomNumbersStore.fetchRandomNumber();
  }

  public fetchRandomMultiple() {
    this.randomNumbersStore.fetchRandomMultiple(this.form.value.number);
  }

  get number() {
    return this.form.get('number');
  }

  ngOnInit(): void {
    this.randomNumber$ = this.randomNumbersStore.getRandomNumber();

    this.randomMultiple$ = this.randomNumbersStore.getRandomMultiple();

    this.form = this.fb.group({
      number: [null, [Validators.required, Validators.min(1)]],
    });
  }
}
