import { Component } from '@angular/core';
import { Tweet } from '../interface/tweet';
import { TweetService } from '../service/tweet.service';
import { Subscription } from 'rxjs';
import { User } from '../interface/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent {
  listTweet!:Tweet[];
  sub=new Subscription();
  pageWall=0;
  userCurrent:User|undefined;

  constructor(
    private tweetService:TweetService,
    private userService:UserService
  ){}
  
  ngOnInit(){
    this.sub=this.tweetService.tweetInWallObs$.subscribe({
      next:(tweet)=>{
        this.listTweet=tweet;
      }
    })
    this.sub=this.userService.currentUserObs$.subscribe({
      next:(user)=>{
        this.userCurrent=user;
      }
    })
  }
  ngAfterViewInit(){
    this.moreTweet();
  }

  moreTweet(){     
    
    this.pageWall=this.pageWall+1;

    if(this.userCurrent){
      this.tweetService.getTweet(this.userCurrent!.id,this.pageWall);       
    }else{
      this.tweetService.getTweet(0,this.pageWall);       
    }
  }
}
