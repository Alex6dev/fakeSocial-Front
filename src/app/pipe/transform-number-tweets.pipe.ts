import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformNumberTweets'
})
export class TransformNumberTweetsPipe implements PipeTransform {

  transform(value: number): string {
    //check validiter number possitif
    if(value<0){
      return "no number negative";
    }


    if(value<1000){
      //value (0 a 999)
      return `${value.toString()} Tweets`

    }else if(value<10000){
      //value (1.000 a 9.999)
      let tab : string[]= (value/1000).toString().split('.');

      if(tab[1]==undefined){
        //change undefined en "000"
        tab[1]="000";
      }else if(tab[1].length==2){
        //change 0.11 en 0.110
        tab[1]=tab[1]+"0";
      }else if(tab[1].length==1){
        //change 0.1 en 0.100
        tab[1]=tab[1]+"00";
      }
      
      return `${tab[0]},${tab[1]} Tweets`;

    }else if(value<(1000000-1)){
      //value (10.000 à 999.999)
      
      let tab : string[]= (value/1000).toString().split('.');
      
      //if value exemple: 999.000  
      if(tab[1]==undefined){
        return `${tab[0]}K Tweets`;
      }
      return `${tab[0]},${tab[1].split('')[0]}K Tweets`;

    }else if(value>(1000000-1)){
      //value +1M
      let tab : string[]= (value/1000000).toString().split('.');
      //
      if(tab[1]==undefined){
        return `${tab[0]}M Tweets`;
      }
      return `${tab[0]},${tab[1].split('')[0]}M Tweets`;
    }
    //value par default
    return value.toString()+" Tweets";
  }

}
