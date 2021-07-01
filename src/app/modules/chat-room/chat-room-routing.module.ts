import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatRoomContainerComponent } from './container/chat-room-container.component';

const routes: Routes = [
  {
    path: '',
    component: ChatRoomContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoomRoutingModule { }
