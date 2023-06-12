import { Component, Input } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-box-user-current [userCurrent]',
  templateUrl: './box-user-current.component.html',
  styleUrls: ['./box-user-current.component.css']
})
export class BoxUserCurrentComponent {
  @Input() userCurrent! :User;
  displayBox=false;

  constructor(
    private userService:UserService
  ){}
  setDisplayBox(){
    this.displayBox=!this.displayBox;
  }

  logOut(){
    this.userService.setUserInSession(undefined);
    this.userService.setCurrentUser(undefined);
  }
  
}
