import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatRoomResolverService } from './chat-room-resolver.service';
import { ChatRoomContainerComponent } from './container/chat-room-container.component';

const routes: Routes = [
  {
    path: '',
    component: ChatRoomContainerComponent,
    resolve: {
      user: ChatRoomResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoomRoutingModule { }
