import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  
  displayBox:{signIn:boolean,login:boolean}={signIn:false,login:false};


  setDisplayBox(choix : number){
    if(choix==1){
      this.displayBox.login=!this.displayBox.login; 
    }else if(choix==2){      
      this.displayBox.signIn=!this.displayBox.signIn;
    }
  }
}
