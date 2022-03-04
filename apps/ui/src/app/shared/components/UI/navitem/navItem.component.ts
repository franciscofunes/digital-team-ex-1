import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'digital-team-exercise-navitem',
  template: `
    <a mat-list-item (click)="sideNav?.toggle()" [routerLink]="routerLink">{{
      linkContent
    }}</a>
  `,
  styles: [],
})
export class NavItemComponent {
  @Input() routerLink?: string;
  @Input() linkContent?: string;
  @Input() sideNav?: MatSidenav;
}
