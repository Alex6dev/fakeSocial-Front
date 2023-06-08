import { FormControl } from "@angular/forms"

export interface FormControlSignInBirth{
    month: {  name:string,  num:number  }[],
    day: {  numForm:string, num:number  }[],
    year: number[]
}

export interface FormGroupSignInP1{
    nameAndFirstName:FormControl,
    email:FormControl,
    dateOfBirthY:FormControl,
    dateOfBirthM:FormControl,
    dateOfBirthD:FormControl
}

export interface FormGroupSignInP2{
    email:FormControl,
    codeInEmail:FormControl
}

export interface FormGroupSignInP3{
    identifier:FormControl,
    mdp:FormControl
}
