import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormGroupSignInP1, FormGroupSignInP2 } from 'src/app/interface/formSignIn';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-box-form-sign-in',
  templateUrl: './box-form-sign-in.component.html',
  styleUrls: ['./box-form-sign-in.component.css']
})
export class BoxFormSignInComponent {
  numPage=1
  formPage1!:FormGroup<FormGroupSignInP1>;
  fromPage2!:FormGroup<FormGroupSignInP2>;
  constructor(
    private authenticationService:AuthenticationService
  ){}

  ngOnInit(){
    this.formPage1= new FormGroup({
      nameAndFirstName: new FormControl(null,[Validators.required, Validators.maxLength(50),Validators.pattern('^[a-zA-Z]{1,}[ ]{1}[a-zA-Z]{1,}$')]),
      email:new FormControl(null,[Validators.required, Validators.email]),
      dateOfBirthY:new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('[0-9]*')]),
      dateOfBirthM:new FormControl(null,[Validators.required,Validators.minLength(2),Validators.maxLength(2),Validators.pattern('[0-9]*')]),
      dateOfBirthD:new FormControl(null,[Validators.required,Validators.minLength(2),Validators.maxLength(2),Validators.pattern('[0-9]*')]),
    })
  }

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
  
  sendFormPage1(form:FormGroup<FormGroupSignInP1>){
    this.formPage1=form;
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

  sendFormPage2(form:FormGroup<FormGroupSignInP2>){
    this.authenticationService.sendFormSignInPage2(form).subscribe({
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
