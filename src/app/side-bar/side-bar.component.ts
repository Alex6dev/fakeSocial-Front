import { Component } from '@angular/core';
import { User } from '../interface/user';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  login:User={connect:false};

  
  constructor(){

  }


  
}
