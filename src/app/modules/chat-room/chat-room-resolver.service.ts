import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { IUser } from '../../shared/models/user.model';

@Injectable()
export class ChatRoomResolverService implements Resolve<IUser | boolean> {

  constructor(private socket: Socket) {}

  resolve(route: ActivatedRouteSnapshot): Promise<IUser | boolean> {
    const sessionId = route.queryParamMap.get('id');

    return new Promise((resolve, reject) => {
      this.socket.emit('Validate', sessionId, (response: { isValid: boolean, user?: any }) => {
        if (!response.isValid) {
          return reject(false);
        }
        resolve(response.user);
      })
    });
  }

}
