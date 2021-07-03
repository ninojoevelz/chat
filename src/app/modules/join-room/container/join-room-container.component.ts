import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-join-room-container',
  templateUrl: './join-room-container.component.html',
  styleUrls: ['./join-room-container.component.scss']
})
export class JoinRoomContainerComponent {

  joinRoomFormGroup: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private socket: Socket,
    private matSnackBar: MatSnackBar) {

    this.joinRoomFormGroup = this.formBuilder.group({
      username: ['', Validators.required],
      room: ['', Validators.required]
    });
  }

  onEnterRoom(): void {
    const username: string = this.joinRoomFormGroup.value.username;
    const room: string = this.joinRoomFormGroup.value.room;

    this.socket.emit('Join', { username, room }, (response: { id: string | null; error: string | null; }) => {
      if (response.id) {
        this.router.navigate(['/chat-room'], { queryParams: { id: response.id } });
      } else {
        this.matSnackBar.open(response.error || 'Something went wrong!', '', { duration: 5000 });
      }
    });
  }

}
