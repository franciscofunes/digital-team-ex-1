import { Component } from '@angular/core';

@Component({
  selector: 'digital-team-exercise-header',
  template: `
    <mat-sidenav-container fullscreen>
      <!--sidenav-->
      <mat-sidenav #sidenav mode="over" opened="false" position="end">
        <mat-nav-list>
          <span mat-list-item></span>
          <digital-team-exercise-navitem
            routerLink="home"
            linkContent="Home"
            [sideNav]="sidenav"
          ></digital-team-exercise-navitem>
          <digital-team-exercise-navitem
            routerLink="messages"
            linkContent="Messages"
            [sideNav]="sidenav"
          ></digital-team-exercise-navitem>
          <digital-team-exercise-navitem
            routerLink="random"
            linkContent="Random"
            [sideNav]="sidenav"
          ></digital-team-exercise-navitem>
        </mat-nav-list>
      </mat-sidenav>

      <!--header-->
      <mat-toolbar class="navbar" color="primary">
        <mat-toolbar-row>
          <button
            mat-icon-button
            (click)="sidenav.toggle()"
            fxShow="true"
            fxHide.gt-sm
            fxFlexOrder="2"
          >
            <mat-icon>menu</mat-icon>
          </button>
          <div class="logo">
            <a routerLink="/"
              >| Digi-Team
              <mat-icon class="code-icon">code</mat-icon>
              |</a
            >
          </div>
          <span class="example-spacer"></span>
          <div fxShow="true" fxHide.lt-md="true">
            <div>
              <span> <a routerLink="home">Home</a> </span>
              <span> <a routerLink="messages">Messages</a> </span>
              <span> <a routerLink="random">Random</a> </span>
            </div>
          </div>
        </mat-toolbar-row>
      </mat-toolbar>

      <router-outlet></router-outlet>
    </mat-sidenav-container>
  `,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {}
