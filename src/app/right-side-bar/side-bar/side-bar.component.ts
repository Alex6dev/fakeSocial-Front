import { Component, Input } from '@angular/core';
import {  User } from '../../interface/user';
import { TrendsForYou } from 'src/app/interface/trends-for-you';

const fakeData:TrendsForYou[]=[
  {
    categories:["Trending in France","Sport"],
    name:"#AlerteEnlevement",
    nbTweets:2000000
  }, 
  {
    categories:["Trending"],
    name:"L'horreur",
    nbTweets:9524
  },
  {
    categories:["Trending in France","Sport"],
    name:"#AlerteEnlevement",
    nbTweets:26710
  },
  {
    categories:["Trending"],
    name:"L'horreur",
    nbTweets:952
  }
]
@Component({
  selector: 'app-side-bar [userCurrent]',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})

export class SideBarComponent {
  @Input() userCurrent:User|undefined;
  listTrendsForYou:TrendsForYou[]=fakeData;
}
