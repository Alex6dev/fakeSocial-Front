import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent {
  
  displayBox:{display:boolean,signIn:boolean,login:boolean}={display:false, signIn:false,login:false};


  setDisplayBox(choix : "signIn"|"login"){
    this.displayBox.display=!this.displayBox.display;
    if(choix=="login"){
      this.displayBox.login=!this.displayBox.login; 
    }else if(choix=="signIn"){      
      this.displayBox.signIn=!this.displayBox.signIn;
    }
  }
}
