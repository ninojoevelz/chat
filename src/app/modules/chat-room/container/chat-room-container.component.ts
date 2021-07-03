import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { IUser } from '../../../shared/models/user.model';

@Component({
  selector: 'app-chat-room-container',
  templateUrl: './chat-room-container.component.html',
  styleUrls: ['./chat-room-container.component.scss']
})
export class ChatRoomContainerComponent implements OnInit, OnDestroy {

  messageFormGroup: FormGroup;
  messages: { text: string; username: string; createdAt: number; isOwner?: boolean }[] = [];

  private readonly _user: IUser;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private socket: Socket) {

    this._user = this.activatedRoute.snapshot.data.user;

    this.messageFormGroup = this.formBuilder.group({
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.socket.on('Message', (message: any) => {
      console.log('message: ', message);
      this.messages.push({
        ...message,
        isOwner: message.username === this._user.username
      });
    });
  }

  ngOnDestroy(): void {
    this.socket.emit('Disconnect', this._user.id);
  }

  onSend(): void {
    const message: string = this.messageFormGroup.value.message;
    if (!message) {
      return;
    }

    this.socket.emit('Message', { id: this._user.id, message }, (response: { success: boolean, error: string | undefined }) => {
      if (response?.error) {
        return console.log(response.error);
      }
      this.messageFormGroup.reset();
    });
  }

}
