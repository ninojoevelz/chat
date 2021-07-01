import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoomRoutingModule } from './chat-room-routing.module';
import { ChatRoomContainerComponent } from './container/chat-room-container.component';


@NgModule({
  declarations: [
    ChatRoomContainerComponent
  ],
  imports: [
    CommonModule,
    ChatRoomRoutingModule
  ]
})
export class ChatRoomModule { }
