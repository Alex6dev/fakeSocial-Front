import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar-nex-in-twitter',
  templateUrl: './side-bar-nex-in-twitter.component.html',
  styleUrls: ['./side-bar-nex-in-twitter.component.css']
})
export class SideBarNexInTwitterComponent {
  boxSignIn=false;
  changeBoxSignIn(){
    this.boxSignIn=!this.boxSignIn;
  }
}
