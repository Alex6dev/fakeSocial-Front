import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { environement } from 'src/environements/environements';
import { FormGroupSignInP1, FormGroupSignInP2, FormGroupSignInP3 } from '../interface/formSignIn';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormLogin } from '../interface/form-login';
import { User } from '../interface/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  urlAuth= environement.apiUrl+"/api/authentication";
  urlNewUser=environement.apiUrl+"/api/newAuthInfo";
  urlConfirmCode=environement.apiUrl+"/api/confirmCode";
  constructor(
    private http: HttpClient,
    private userService:UserService
  ) { }

  authentication(formLogin:FormLogin){
    const body= JSON.parse(`{
      "identifier":"${formLogin.identifier}",
      "mdp":"${formLogin.mdp}"
    }`)
    this.http.post<User>(this.urlAuth,body).subscribe({
      next:(user)=>{        
        this.userService.setCurrentUser(user); 
        this.userService.setUserInSession(formLogin)
      },
      error:()=>{
        //todo error à faire
      }

    });
  }

  sendFormSignInPage1(form:FormGroup<FormGroupSignInP1>):Observable<boolean>{
    
    const stringDateOfBirth:string=form.controls.dateOfBirthY.value+"-"+form.controls.dateOfBirthM.value+"-"+form.controls.dateOfBirthD.value;
    const body=JSON.parse(`{
      "name":"${form.controls.nameAndFirstName.value.split(' ')[0]}",
      "firstName":"${form.controls.nameAndFirstName.value.split(' ')[1]}",
      "email":"${form.controls.email.value}",
      "dateOfBirth":"${stringDateOfBirth}"
    }`)
    return this.http.post<boolean>(this.urlNewUser,body);
  }
  sendFormSignInPage2(form:FormGroup<FormGroupSignInP2>){
    const body=JSON.parse(`{
      "identifier":"${form.controls.email.value}",
      "code":"${form.controls.codeInEmail.value}"
    }`)
    return this.http.post<boolean>(this.urlConfirmCode,body);
  }

  sendFormSignInPage3(form:FormGroup<FormGroupSignInP3>){
    const body=JSON.parse(`{
      "identifier":"${form.controls.identifier.value}",
      "mdp":"${form.controls.mdp.value}"
    }`)
    return this.http.put<boolean>(this.urlNewUser,body);
  }
}
