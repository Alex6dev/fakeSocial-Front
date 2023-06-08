import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormGroupSignInP2 } from 'src/app/interface/formSignIn';

@Component({
  selector: 'app-page2 [email]',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
  form!:FormGroup<FormGroupSignInP2>;
  @Input() email!:string;
  @Output() sendForm= new EventEmitter<FormGroup<FormGroupSignInP2>>();

  ngOnInit(){
    this.form=new FormGroup({
      email: new FormControl(this.email,[Validators.required, Validators.email]),
      codeInEmail: new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern('[0-9]*')])
    })
  }
  
  submitFormPage2(){
    if(this.form.valid){
      this.sendForm.emit(this.form);
    }
  }
}
