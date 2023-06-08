import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlSignInBirth, FormGroupSignInP1 } from 'src/app/interface/formSignIn';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-page1 [form]',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  @Input() form!:FormGroup<FormGroupSignInP1>;
  initDateOfBirth:FormControlSignInBirth  ={month: [],day: [],year: []}
  @Output() sendForm= new EventEmitter<FormGroup<FormGroupSignInP1>>();

  ngOnInit(){
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

