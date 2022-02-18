import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './mat/mat.module';
import { AppRoutingModule } from './app-routing.module';
// import { HomeModule } from './pages/home/home.module';
// import { WrappMsgSenderModule } from './pages/wrapp-msg-sender/wrappMsgSender.module';
// import { RandomModule } from './pages/random/random.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatModule,
    // HomeModule,
    // WrappMsgSenderModule,
    // RandomModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
