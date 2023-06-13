import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { BehaviorSubject } from 'rxjs';
import { FormLogin } from '../interface/form-login';
import { TweetService } from './tweet.service';


export const STOCKAGE_LOCAL_IDENTIFIER='identifier';
export const STOCKAGE_LOCAL_MDP='password';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser=new BehaviorSubject<User|undefined>(undefined);
  currentUserObs$= this.currentUser.asObservable();

  constructor(
    private tweetService:TweetService
  ){}
  setCurrentUser(user: User|undefined):void {
    this.currentUser.next(user);   
    if(user){
      this.tweetService.getTweet(user.id,0);
    }
  }

  setUserInSession(formLogin:FormLogin|undefined){
    formLogin===undefined? (
      window.sessionStorage.removeItem(STOCKAGE_LOCAL_MDP),
      window.sessionStorage.removeItem(STOCKAGE_LOCAL_IDENTIFIER) 
    ) :(
      window.sessionStorage.setItem(STOCKAGE_LOCAL_IDENTIFIER,formLogin.identifier),
      window.sessionStorage.setItem(STOCKAGE_LOCAL_MDP,formLogin.mdp)
    );

  }

}
