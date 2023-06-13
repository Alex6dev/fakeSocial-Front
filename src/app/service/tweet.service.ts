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

  urlNewTweet=environement.apiUrl+"/api/newPost"
  
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
        console.log(val); 
        
        //this.getTweet(form.controls.author.value);  
      }
    })
  }
  
  getTweet(idUser:number){
    const body=JSON.parse(`{
      "user":"${idUser}"
    }`);
    this.http.post<Tweet[]>(this.urlNewTweet,body).subscribe({
      next:(val)=>{
        console.log(val);
        
      }
    })

  }
}
