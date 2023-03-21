import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DocLoginComponent } from './home/doc-login/doc-login.component';
import { DocRegComponent } from './home/doc-reg/doc-reg.component';
import { PatLoginComponent } from './home/pat-login/pat-login.component';
import { PatRegComponent } from './home/pat-reg/pat-reg.component';
import { PatientRoomComponent } from './patient-room/patient-room.component';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { NewChatRoomComponent } from './new-chat-room/new-chat-room.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DocLoginComponent,
    DocRegComponent,
    PatLoginComponent,
    PatRegComponent,
    PatientRoomComponent,
    ChatRoomComponent,
    NewChatRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
