import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormGroupSignInP3 } from 'src/app/interface/formSignIn';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
  @Input() form!:FormGroup<FormGroupSignInP3>;
  @Output() submitForm= new EventEmitter<FormGroup<FormGroupSignInP3>>; 

  ngOnInit(){
    this.form.controls['identifier'].disable();
  }
  submitFormP2(){
    if(this.form.valid){
      this.submitForm.emit(this.form);
    }
  }
}
