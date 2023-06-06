import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { environement } from 'src/environements/environements';
import { FormGroupSignIn } from '../interface/formSignIn';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  urlAuth= environement.apiUrl+"/api/authentication";
  urlNewUser=environement.apiUrl+"/api/newAuthInfo"
  constructor(
    private http: HttpClient,
  ) { }

  // authenciationWithAPi(){
  //   const body= JSON.parse(`{
  //     "iden":"",
  //     "mdp":"",
  //   }`)
  // }

  sendFormSignInPage1(form:FormGroup<FormGroupSignIn>):Observable<boolean>{
    
    const stringDateOfBirth:string=form.controls.dateOfBirthY.value+"-"+form.controls.dateOfBirthM.value+"-"+form.controls.dateOfBirthD.value;
    const body=JSON.parse(`{
      "name":"${form.controls.nameAndFirstName.value.split(' ')[0]}",
      "firstName":"${form.controls.nameAndFirstName.value.split(' ')[1]}",
      "email":"${form.controls.email.value}",
      "dateOfBirth":"${stringDateOfBirth}"
    }`)
    console.log(body);
    return this.http.post<boolean>(this.urlNewUser,body)
  }
  sendFormSignInPage2(){

  }
}
