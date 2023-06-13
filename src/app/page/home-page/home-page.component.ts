import { Component, Input } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { User } from 'src/app/interface/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  userCurrent!:User|undefined;
  sub=new Subscription();
  
  constructor(
    private userService:UserService
  ){}

  ngOnInit(){
    this.sub=this.userService.currentUserObs$.subscribe((currentUser)=>{
      this.userCurrent=currentUser;
    })
  }
  
}
