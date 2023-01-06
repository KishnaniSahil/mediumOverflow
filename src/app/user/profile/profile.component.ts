import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isLoggedin=true;
  // toggleMenu(condition :any){
  //   if(condition==true){
  //     this.isLoggedin=false;
  //   }
  //   if(this.isLoggedin==true){
  //     this.isLoggedin=false;
  //    }
  // }

}
