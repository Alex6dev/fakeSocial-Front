import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar-nex-in-twitter',
  templateUrl: './side-bar-nex-in-twitter.component.html',
  styleUrls: ['./side-bar-nex-in-twitter.component.css']
})
export class SideBarNexInTwitterComponent {
  @Output() sendOpenForm=new EventEmitter<"signIn">();
  changeBoxSignIn(){
    this.sendOpenForm.emit("signIn");
  }
}
