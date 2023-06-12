import { Component, Input } from '@angular/core';
import {  User } from '../../interface/user';

@Component({
  selector: 'app-side-bar [userCurrent]',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  @Input() userCurrent:User|undefined;

}
