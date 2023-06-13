import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormSignInModule } from './form-sign-in/form-sign-in.module';
import { LeftSideBarModule } from './left-side-bar/left-side-bar.module';
import { RightSideBarModule } from './right-side-bar/right-side-bar.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FormLoginModule } from './form-login/form-login.module';
import { WallComponent } from './wall/wall.component';
import { WriteTweetComponent } from './write-tweet/write-tweet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopBarComponent,
    WallComponent,
    WriteTweetComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormSignInModule,
    LeftSideBarModule,
    RightSideBarModule,
    FormLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
