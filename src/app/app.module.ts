import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




import { ChatModule } from './chat/chat.module';
import { UserModule } from './user/user.module';
import { LoginComponent } from './user/login/login.component';
import { BlogFormComponent } from './blog-form/blog-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogFormComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    UserModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
