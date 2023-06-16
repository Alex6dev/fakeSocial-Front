import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateEdit'
})
export class DateEditPipe implements PipeTransform {

  transform(value: string): string {
    if(value==undefined || value==null){
      return "";
    }
    const date= new Date();
    const dateTweet=new Date(value);
    const difDateMiliseconde= date.getTime()-dateTweet.getTime();

    //verifid if value is superior of 1 year
    if(difDateMiliseconde/31536000000>1){
      return Math.trunc(difDateMiliseconde/31536000000).toString()+" year";

    }else if(difDateMiliseconde/2592000000>1){
      //verifid if value is superior of 1 month
      return Math.trunc(difDateMiliseconde/2592000000).toString()+" month";

    }else if(difDateMiliseconde/86400000>1){
      //verifid if value is superior of 1 day
      return Math.trunc(difDateMiliseconde/86400000).toString()+" day";

    }else if(difDateMiliseconde/3600000>1){
      //verifid if value is superior of 1 hour
      return Math.trunc(difDateMiliseconde/3600000).toString()+" hour";

    }else if(difDateMiliseconde/60000>1){
      //verifid if value is superior of 1 min
      return Math.trunc(difDateMiliseconde/60000).toString()+" min";

    }else{
      return "now";
      
    }
  }
}
