import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextpostComponent } from './textpost/textpost.component';
import { PhotopostComponent } from './photopost/photopost.component';



@NgModule({
  declarations: [
   
    TextpostComponent,
    PhotopostComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostModule { }
