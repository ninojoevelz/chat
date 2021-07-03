import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinRoomContainerComponent } from './container/join-room-container.component';

const routes: Routes = [
  {
    path: '',
    component: JoinRoomContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoinRoomRoutingModule { }
