import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MenuSideBarComponent } from './menu-side-bar/menu-side-bar.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { SideBarNexInTwitterComponent } from './side-bar-nex-in-twitter/side-bar-nex-in-twitter.component';
import { HttpClientModule } from '@angular/common/http';
import { FormSignInModule } from './form-sign-in/form-sign-in.module';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MenuSideBarComponent,
    HomePageComponent,
    FormLoginComponent,
    SideBarNexInTwitterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormSignInModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
