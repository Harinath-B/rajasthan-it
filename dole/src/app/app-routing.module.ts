import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { DocLoginComponent } from './home/doc-login/doc-login.component';
import { DocRegComponent } from './home/doc-reg/doc-reg.component';
import { HomeComponent } from './home/home.component';
import { PatLoginComponent } from './home/pat-login/pat-login.component';
import { PatRegComponent } from './home/pat-reg/pat-reg.component';
import { NewChatRoomComponent } from './new-chat-room/new-chat-room.component';
import { PatientRoomComponent } from './patient-room/patient-room.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  }
  ,
  {
    path:'home',
    component: HomeComponent,
  }
  ,
  {
    path:'patient-login',
    component: PatLoginComponent
  },
  {
    path:'doctor-login',
    component: DocLoginComponent
  },
  {
    path:'patient-reg',
    component: PatRegComponent
  },
  {
    path:'doctor-reg',
    component: DocRegComponent
  },
  {
    path:'patient-room',
    component: PatientRoomComponent
  },
  {
    path:'chat-room',
    component: ChatRoomComponent
  },
  {
    path:'new-chat-room',
    component: NewChatRoomComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
