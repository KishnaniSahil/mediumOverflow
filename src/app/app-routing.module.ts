import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChattemplateComponent } from './chat/chattemplate/chattemplate.component';
import { PhotopostComponent } from './post/photopost/photopost.component';
import { TextpostComponent } from './post/textpost/textpost.component';
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';
import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { NotificationComponent } from './user/notification/notification.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SignupComponent } from './user/signup/signup.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "profile", component: ProfileComponent},
  {path: "notification", component: NotificationComponent},
  {path: "chat", component: ChattemplateComponent},
  {path: "home", component: HomeComponent},
  {path: "textpost", component: TextpostComponent},
  {path: "photopost", component: PhotopostComponent},
  {path: "editProfile", component: EditProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
