import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1/page1.component';
import { FormLoginComponent } from './form-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Page2Component } from './page2/page2.component';



@NgModule({
  declarations: [
    Page1Component,
    FormLoginComponent,
    Page2Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    FormLoginComponent
  ]
})
export class FormLoginModule { }
