import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormGroupSignInP3 } from 'src/app/interface/formSignIn';

@Component({
  selector: 'app-page3 [email]',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component {
  form!:FormGroup<FormGroupSignInP3>;
  @Output() sendForm= new EventEmitter<FormGroup<FormGroupSignInP3>>();
  @Input() email!:string;

  ngOnInit(){
    this.form=new FormGroup({
      identifier: new FormControl(this.email ,[Validators.required]),
      mdp:new FormControl(null,[Validators.required,Validators.minLength(8)])
    })
  }

  submitFormPage3(){
    
    if(this.form.valid){
      this.sendForm.emit(this.form);
    }
  }
  
}

