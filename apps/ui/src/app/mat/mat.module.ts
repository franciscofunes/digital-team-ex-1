import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatToolbarModule,
    MatTooltipModule,
    MatIconModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class MatModule {}
