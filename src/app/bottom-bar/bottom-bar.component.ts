import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DisplayForm } from '../interface/display-form';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent {
  
  @Input() displayBox!:DisplayForm;
  @Output() emitForm=new EventEmitter<DisplayForm>();

  setDisplayBox(choix : "signIn"|"login"){
    this.displayBox.display=!this.displayBox.display;
    if(choix=="login"){
      this.displayBox.login=!this.displayBox.login; 
    }else{      
      this.displayBox.signIn=!this.displayBox.signIn;
    }
    this.emitForm.emit(this.displayBox);
  }
}
