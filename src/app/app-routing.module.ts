import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilPageComponent } from './page/acceuil-page/acceuil-page.component';

const routes: Routes = [
  {
    path:"", component:AcceuilPageComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
