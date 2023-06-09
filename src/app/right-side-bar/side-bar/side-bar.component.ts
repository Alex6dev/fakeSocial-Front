import { Component } from '@angular/core';
import {  User } from '../../interface/user';
import { UserService } from '../../service/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  user:User|undefined=undefined;
  sub:Subscription=new Subscription;

  constructor( 
    private userService:UserService
  ){}

  ngOnInit(){
    this.sub=this.userService.currentUserObs$.subscribe((currentUser)=>{
      this.user=currentUser;
    })
  }

  
}
