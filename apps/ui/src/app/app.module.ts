import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './mat/mat.module';
import { SenderComponent } from './sender/sender.component';
import { MessagesComponent } from './messages/messages.component';
import { RandomComponent } from './random/random.component';

@NgModule({
  declarations: [AppComponent, SenderComponent, MessagesComponent, RandomComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
