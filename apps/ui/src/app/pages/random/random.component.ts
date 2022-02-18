import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { RandomNumbersStore } from '../../stores/randomNumbers.store';
// import { Observable } from 'rxjs';
// import { RandomNumberService } from '../services/randomNumber.service';

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
              (ngSubmit)="saveDetails(form)"
              autocomplete="off"
            >
              <div>
                <mat-form-field appearance="standard">
                  <mat-label>Number </mat-label>
                  <input
                    type="number"
                    id="number"
                    number="number"
                    matInput
                    placeholder="Write your number..."
                    formControlName="number"
                    required
                  />
                  <mat-icon matSuffix>confirmation_number</mat-icon>
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
          </mat-card-content>
        </mat-card>
      </section>
      <p class="body-1">Multiple: 0</p>
    </div>
  `,
  styleUrls: ['./random.component.scss'],
})
export class RandomComponent implements OnInit {
  dataLoading$ = true;
  randomNumber$?: Observable<number>;
  form!: FormGroup;

  constructor(
    private randomNumbersStore: RandomNumbersStore,
    private fb: FormBuilder
  ) {}

  public fetchRandomNumber() {
    this.randomNumbersStore.fetchRandomNumber();
  }

  ngOnInit(): void {
    this.randomNumber$ = this.randomNumbersStore.getRandomNumber();
    this.form = this.fb.group({
      number: [null, [Validators.required, Validators.min(1)]],
    });
  }

  get number() {
    return this.form.get('number');
  }

  saveDetails(form: FormGroup) {
    alert('SUCCESS!! 🙄 \n\n' + JSON.stringify(form.value, null, 4));
  }
}
