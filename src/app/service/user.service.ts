import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { BehaviorSubject } from 'rxjs';
import { FormLogin } from '../interface/form-login';


export const STOCKAGE_LOCAL_IDENTIFIER='identifier';
export const STOCKAGE_LOCAL_MDP='password';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser=new BehaviorSubject<User|undefined>(undefined);
  currentUserObs$= this.currentUser.asObservable();

  setCurrentUser(user: User|undefined):void {
    this.currentUser.next(user);   
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
