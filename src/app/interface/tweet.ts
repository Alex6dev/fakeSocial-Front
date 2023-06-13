import { UserSimple } from "./user";
import { Comment } from "./comment";
import { FormControl } from "@angular/forms";

export interface Tweet {
    id:number,
    content:string,
    author:number,
    userRetweet:UserSimple[],
    commentTweet:Comment[],
    postTime:string
}

export interface NewTweet{
    content:FormControl,
    author:FormControl
}

