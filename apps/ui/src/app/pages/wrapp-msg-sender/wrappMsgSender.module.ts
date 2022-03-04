import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatModule } from '../../mat/mat.module';
import { WrappMsgSenderComponent } from './wrapp-msg-sender.component';
import { MessagesComponent } from '../messages/messages.component';
import { SenderComponent } from '../sender/sender.component';
import { WrapMsgSenderRoutingModule } from './wrapMsgSender-routing.module';

@NgModule({
  declarations: [SenderComponent, MessagesComponent, WrappMsgSenderComponent],
  imports: [CommonModule, MatModule, WrapMsgSenderRoutingModule],
})
export class WrappMsgSenderModule {}
