import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NewTweet, Tweet } from '../interface/tweet';
import { HttpClient } from '@angular/common/http';
import { environement } from 'src/environements/environements';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  urlNewTweet=environement.apiUrl+"/api/newPost";
  urlGetTweet=environement.apiUrl+"/api/post";
  
  private tweetInWall= new BehaviorSubject<Tweet[]>([]);
  tweetInWallObs$=this.tweetInWall.asObservable();
  
  constructor(
    private http:HttpClient

  ) { }

  setTweetInWall(tweet:Tweet[]){
    this.tweetInWall.next(tweet);
  }

  sendTweetInAPI(form: FormGroup<NewTweet>){
    const body=JSON.parse(`{
      "content":"${form.controls.content.value}",
      "author":"${form.controls.author.value}"
    }`);
    this.http.post(this.urlNewTweet,body).subscribe({
      next:(val)=>{        
        this.getTweet(form.controls.author.value,0);  
      }
    })
  }
  
  getTweet(idUser:number,page:number){
    const body=JSON.parse(`{
      "userId":"${idUser}",
      "pageNext":${page}
    }`);
    this.http.post<Tweet[]>(this.urlGetTweet,body).subscribe({
      next:(tweet)=>{
        console.log(tweet);
        this.setTweetInWall(this.tweetInWall.value.concat(tweet))
      }
    })
  }
}
