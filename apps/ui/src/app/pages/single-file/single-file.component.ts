import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'digital-team-exercise-single-file',
  template: ` <p>single-file works!</p> `,
  styles: ['p { font-size: 1.5rem; }'],
})
export class SingleFileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
