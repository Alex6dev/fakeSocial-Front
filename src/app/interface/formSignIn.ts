import { FormControl } from "@angular/forms"

export interface FormControlSignInBirth{
    month: {  name:string,  num:number  }[],
    day: {  numForm:string, num:number  }[],
    year: number[]
}

export interface FormGroupSignIn{
    nameAndFirstName:FormControl,
    email:FormControl,
    dateOfBirthY:FormControl,
    dateOfBirthM:FormControl,
    dateOfBirthD:FormControl,
}
