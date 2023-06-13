import { Component, Input } from '@angular/core';
import { User } from '../interface/user';
import { TweetService } from '../service/tweet.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewTweet} from '../interface/tweet';

@Component({
  selector: 'app-write-tweet [userCurrent]',
  templateUrl: './write-tweet.component.html',
  styleUrls: ['./write-tweet.component.css']
})
export class WriteTweetComponent {
  @Input() userCurrent!:User;
  form!: FormGroup<NewTweet>;
  
  constructor(
    private tweetService:TweetService
  ){}

  ngOnInit(){
    this.form=new FormGroup({
      content:new FormControl(null,[Validators.required,Validators.minLength(2),Validators.maxLength(256)]),
      author:new FormControl(this.userCurrent.id,[Validators.required])
    })
  }

  sendTweet(){
    if(this.form.valid){
      this.tweetService.sendTweetInAPI(this.form);
    }
  }
}
