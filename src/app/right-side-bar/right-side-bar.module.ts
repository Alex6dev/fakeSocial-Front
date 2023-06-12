import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideBarNexInTwitterComponent } from './side-bar-nex-in-twitter/side-bar-nex-in-twitter.component';
import { FormSignInModule } from '../form-sign-in/form-sign-in.module';
import { TrendsForYouItemComponent } from './trends-for-you-item/trends-for-you-item.component';
import { TransformNumberTweetsPipe } from '../pipe/transform-number-tweets.pipe';



@NgModule({
  declarations: [
    SideBarComponent,
    SideBarNexInTwitterComponent,
    TrendsForYouItemComponent,
    TransformNumberTweetsPipe
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
