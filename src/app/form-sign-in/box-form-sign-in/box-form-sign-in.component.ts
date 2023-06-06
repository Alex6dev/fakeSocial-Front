import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormGroupSignIn } from 'src/app/interface/formSignIn';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-box-form-sign-in',
  templateUrl: './box-form-sign-in.component.html',
  styleUrls: ['./box-form-sign-in.component.css']
})
export class BoxFormSignInComponent {
  numPage=1

  constructor(
    private authenticationService:AuthenticationService


  ){}
  nextPage(){
    if(this.numPage!=3){
      this.numPage=this.numPage+1;
    }
  }
  previousPage(){
    if(this.numPage!=1){
      this.numPage=this.numPage-1;
    }
  }
  sendFormPage1(form:FormGroup<FormGroupSignIn>){
    this.authenticationService.sendFormSignInPage1(form).subscribe({
      next:(boolean)=>{
        if(boolean){
          this.nextPage();
        }else{
          //erreur
        }
      }
    })
  }
  
}
