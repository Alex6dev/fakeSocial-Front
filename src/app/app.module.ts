import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilPageComponent } from './page/acceuil-page/acceuil-page.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MenuSideBarComponent } from './menu-side-bar/menu-side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilPageComponent,
    SideBarComponent,
    MenuSideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
