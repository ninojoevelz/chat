import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'join-room',
    loadChildren: () => import('./modules/join-room/join-room.module').then(m => m.JoinRoomModule)
  },
  {
    path: 'chat-room',
    loadChildren: () => import('./modules/chat-room/chat-room.module').then(m => m.ChatRoomModule),
    canActivate: []
  },
  {
    path: '**',
    redirectTo: 'join-room',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
