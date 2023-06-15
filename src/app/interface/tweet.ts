import { UserSimple } from "./user";
import { FormControl } from "@angular/forms";

export interface Tweet {
    id:number,
    content:string,
    author:UserSimple,
    profileLike:number,
    postComment:number,
    postTime:string,
    image:string
}

export interface NewTweet{
    content:FormControl,
    author:FormControl,
}

