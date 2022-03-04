import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrappMsgSenderComponent } from './wrapp-msg-sender.component';

const routes: Routes = [
  {
    path: '',
    component: WrappMsgSenderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WrapMsgSenderRoutingModule {}
