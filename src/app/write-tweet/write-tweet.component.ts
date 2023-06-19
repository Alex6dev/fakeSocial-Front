import { Component, Input } from '@angular/core';
import { User } from '../interface/user';
import { TweetService } from '../service/tweet.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewTweet} from '../interface/tweet';

@Component({
  selector: 'app-write-tweet [userCurrent]',
  templateUrl: './write-tweet.component.html',
  styleUrls: ['./write-tweet.component.css']
})
export class WriteTweetComponent {
  @Input() userCurrent!:User;
  form!: FormGroup<NewTweet>;
  imageInTweet:string|null|ArrayBuffer=null;
  
  constructor(
    private tweetService:TweetService
  ){}

  ngOnInit(){
    this.form=new FormGroup({
      content:new FormControl(null,[Validators.required,Validators.minLength(2),Validators.maxLength(256)]),
      author:new FormControl(this.userCurrent.id,[Validators.required])
    })
    const inputElement = document.getElementById("iconePicture_input");
    inputElement!.addEventListener("change",(e)=>this.handleFiles(e));
    
  }

  sendTweet(){
    if(this.form.valid){
      if(this.imageInTweet){
        this.tweetService.sendTweetAndImageInAPI(this.imageInTweet,this.form);        
      }else{
        this.tweetService.sendTweetInAPI(this.form);
      }
    }
    this.imageInTweet=null;
    this.form=new FormGroup({
      content:new FormControl(null,[Validators.required,Validators.minLength(2),Validators.maxLength(256)]),
      author:new FormControl(this.userCurrent.id,[Validators.required])
    })
  }
  handleFiles(event:any) {
    const selectedfile = event.target.files;
    if (selectedfile.length > 0) {
      const [imageFile] = selectedfile;
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const srcData = fileReader.result;
        this.imageInTweet=srcData;
      };
      fileReader.readAsDataURL(imageFile);
    }
  }
}
