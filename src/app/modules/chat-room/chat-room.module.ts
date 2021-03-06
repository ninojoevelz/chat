import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ChatRoomResolverService } from './chat-room-resolver.service';
import { ChatRoomRoutingModule } from './chat-room-routing.module';
import { ChatRoomContainerComponent } from './container/chat-room-container.component';

const materials = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
];

@NgModule({
  declarations: [
    ChatRoomContainerComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ChatRoomRoutingModule,
    ReactiveFormsModule,
    ...materials
  ],
  providers: [
    ChatRoomResolverService,
  ]
})
export class ChatRoomModule { }
