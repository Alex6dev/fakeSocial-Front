import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page2Component } from './page2/page2.component';
import { Page1Component } from './page1/page1.component';
import { Page3Component } from './page3/page3.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BoxFormSignInComponent } from './box-form-sign-in/box-form-sign-in.component';



@NgModule({
  declarations: [
    Page1Component,
    Page2Component,
    Page3Component,
    BoxFormSignInComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule

  ],
  exports:[
    BoxFormSignInComponent
  ]
})
export class FormSignInModule { }
