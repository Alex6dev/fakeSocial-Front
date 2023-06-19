import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormGroupSignInP3 } from '../interface/formSignIn';
import { AuthenticationService } from '../service/authentication.service';




@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  currentPage:number=1;
  form!:FormGroup<FormGroupSignInP3>;
  @Output() closeForm= new EventEmitter<"login">();
  
  constructor(
    private authenticationService:AuthenticationService

  ){}

  ngOnInit(){
    this.form= new FormGroup({
      identifier: new FormControl(null ,[Validators.required]),
      mdp:new FormControl(null,[Validators.required,Validators.minLength(8)])
    })
  }

  setFormP1(form:FormGroup<FormGroupSignInP3>){
    this.form=form;
    this.currentPage=this.currentPage+1
  }
  connect(form:FormGroup<FormGroupSignInP3>){
    this.form=form;
    this.authenticationService.authentication({
      identifier:form.controls.identifier.value,
      mdp:form.controls.mdp.value
    });
    this.closeForm.emit('login');
  }
}
