import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormGroupSignInP3 } from 'src/app/interface/formSignIn';

@Component({
  selector: 'app-page1 [form]',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  @Input() form!:FormGroup<FormGroupSignInP3>;
  @Output() sendForm= new EventEmitter<FormGroup<FormGroupSignInP3>>;
  
  sendPage1(){
    this.sendForm.emit(this.form);
  }
}
