import { Component } from '@angular/core';

@Component({
  selector: 'digital-team-exercise-home',
  template: `
    <div class="container">
      <mat-icon>home</mat-icon>
      <h1 class="mat-display-1">
        Welcome to the Digital Team Onboarding exercises
      </h1>
    </div>
  `,
  styles: ['.container  { margin: 50px;  text-align: center; }'],
})
export class HomeComponent {}
