import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatModule } from '../../mat/mat.module';
import { RandomComponent } from './random.component';
import { RandomRoutingModule } from './random-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RandomComponent],
  imports: [CommonModule, MatModule, RandomRoutingModule, ReactiveFormsModule],
})
export class RandomModule {}
