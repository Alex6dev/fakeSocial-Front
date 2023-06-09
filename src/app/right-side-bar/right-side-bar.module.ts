import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideBarNexInTwitterComponent } from './side-bar-nex-in-twitter/side-bar-nex-in-twitter.component';
import { FormSignInModule } from '../form-sign-in/form-sign-in.module';



@NgModule({
  declarations: [
    SideBarComponent,
    SideBarNexInTwitterComponent

  ],
  imports: [
    CommonModule,
    FormSignInModule
  ],
  exports:[
    SideBarComponent
  ]
})
export class RightSideBarModule { }
