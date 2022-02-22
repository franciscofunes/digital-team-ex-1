import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'random',
    loadChildren: () =>
      import('./pages/random/random.module').then((m) => m.RandomModule),
  },
  {
    path: 'messages',
    loadChildren: () =>
      import('./pages/wrapp-msg-sender/wrappMsgSender.module').then(
        (m) => m.WrappMsgSenderModule
      ),
  },
  // TODO 404 page
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
