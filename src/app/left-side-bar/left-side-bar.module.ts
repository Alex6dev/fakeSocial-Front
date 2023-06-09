import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSideBarComponent } from './menu-side-bar/menu-side-bar.component';



@NgModule({
  declarations: [
    MenuSideBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MenuSideBarComponent
  ]
})
export class LeftSideBarModule { }
