import { Component } from '@angular/core';
import { Tweet } from '../interface/tweet';
import { TweetService } from '../service/tweet.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent {
  listTweet!:Tweet[];
  sub=new Subscription();

  constructor(
    private tweetService:TweetService
  ){}
  
  ngOnInit(){
    this.sub=this.tweetService.tweetInWallObs$.subscribe({
      next:(tweet)=>{
        this.listTweet=tweet;
      }
    })
  }
}
