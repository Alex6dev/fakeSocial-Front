import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser=new BehaviorSubject<User>({connect:false});
  currentUserObs$= this.currentUser.asObservable();

  setCurrentUser(user: User):void {
    this.currentUser.next(user); 
  }

}
