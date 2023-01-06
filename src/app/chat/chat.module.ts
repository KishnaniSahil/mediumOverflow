import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChattemplateComponent } from './chattemplate/chattemplate.component';





@NgModule({
  declarations: [
    ChattemplateComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
  // ChattemplateComponent
  ]
})
export class ChatModule { }
