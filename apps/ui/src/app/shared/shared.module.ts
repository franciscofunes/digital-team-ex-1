import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatModule } from '../mat/mat.module';
import { NavItemComponent } from './components/UI/navitem/navItem.component';
import { RandomRoutingModule } from '../pages/random/random-routing.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [NavItemComponent, HeaderComponent],
  imports: [CommonModule, MatModule, RandomRoutingModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
