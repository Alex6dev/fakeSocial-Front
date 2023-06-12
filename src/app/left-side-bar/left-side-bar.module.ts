import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSideBarComponent } from './menu-side-bar/menu-side-bar.component';
import { BoxUserCurrentComponent } from './box-user-current/box-user-current.component';



@NgModule({
  declarations: [
    MenuSideBarComponent,
    BoxUserCurrentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MenuSideBarComponent
  ]
})
export class LeftSideBarModule { }
