import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from './interface/user';
import { STOCKAGE_LOCAL_IDENTIFIER, STOCKAGE_LOCAL_MDP, UserService } from './service/user.service';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fakeSocial-Front';
  sub:Subscription= new Subscription();
  userCurrent:User|undefined=undefined;

  constructor( 
    private userService:UserService,
    private authenticationService:AuthenticationService,
  ){}
  
  ngOnInit(){
    if(window.sessionStorage.getItem(STOCKAGE_LOCAL_IDENTIFIER)){
      this.authenticationService.authentication({
        identifier:window.sessionStorage.getItem(STOCKAGE_LOCAL_IDENTIFIER)!,
        mdp:window.sessionStorage.getItem(STOCKAGE_LOCAL_MDP)!
      })
    }
    this.sub=this.userService.currentUserObs$.subscribe((currentUser)=>{
      this.userCurrent=currentUser;
    })

    //feature recharge newTweet in bottom page inconclusive
    // window.addEventListener('scroll',(event)=>{ 
    //   if((window.scrollY+window.innerHeight)>document.body.clientHeight){
    //     if(!this.sendRequestGetMoreTweet){
    //       this.sendRequestGetMoreTweet=!this.sendRequestGetMoreTweet;
    //       this.pageWall=this.pageWall+1;
    //       this.sendRequestGetMoreTweet= this.tweetService.getTweet(this.userCurrent!.id,this.pageWall);       
    //     }
    //   } 
    // })


  }

}
