import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
//import { ChatComponent } from './chat/chat.component';
import { NotificationComponent } from './notification/notification.component';
import { HomeComponent } from './home/home.component';
//import { PostComponent } from './post/post.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
// import { SignupComponent } from './signup/signup.component';




@NgModule({
  declarations: [
    ProfileComponent,
    //ChatComponent,
    NotificationComponent,
    HomeComponent,
   // PostComponent,
    LoginComponent,
   EditProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HomeComponent
    //SignupComponent
    //UserModule
   ]
})
export class UserModule { }
