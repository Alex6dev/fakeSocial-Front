import { Component, Input } from '@angular/core';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-menu-side-bar',
  templateUrl: './menu-side-bar.component.html',
  styleUrls: ['./menu-side-bar.component.css']
})
export class MenuSideBarComponent {
  @Input() userCurrent:User|undefined;

}
