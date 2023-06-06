import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormControlSignInBirth, FormGroupSignIn } from 'src/app/interface/formSignIn';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  form!:FormGroup<FormGroupSignIn>;
  initDateOfBirth:FormControlSignInBirth  ={month: [],day: [],year: []}
  @Output() sendForm= new EventEmitter<FormGroup<FormGroupSignIn>>();

  ngOnInit(){
      this.form= new FormGroup({
        nameAndFirstName: new FormControl(null,[Validators.required, Validators.maxLength(50),Validators.pattern('^[a-zA-Z]{1,}[ ]{1}[a-zA-Z]{1,}$')]),
        email:new FormControl(null,[Validators.required, Validators.email]),
        dateOfBirthY:new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('[0-9]*')]),
        dateOfBirthM:new FormControl(null,[Validators.required,Validators.minLength(2),Validators.maxLength(2),Validators.pattern('[0-9]*')]),
        dateOfBirthD:new FormControl(null,[Validators.required,Validators.minLength(2),Validators.maxLength(2),Validators.pattern('[0-9]*')]),
      })

      //init data birth in variable for form
      let now= new Date();      
      for(let i=0;i<121;i++){
        this.initDateOfBirth.year.push(now.getFullYear()-i)
      }
      for(let i=1;i<31;i++){
        if(i<10){
          this.initDateOfBirth.day.push({numForm:"0"+i.toString(),num:i})
        }else{
          this.initDateOfBirth.day.push({numForm:i.toString(),num:i})
        }
      }
  }

  submitFormPage1(){
    if(this.form.valid){
      this.sendForm.emit(this.form);
    }  
  }

}

