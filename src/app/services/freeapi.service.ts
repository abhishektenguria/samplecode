import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from '../classes/posts';

@Injectable({
    providedIn: 'root'
  })
export class freeApiService{

    constructor(private httpclient: HttpClient){

    }

    getComments(): Observable<any>{
       return this.httpclient.get("https://jsonplaceholder.typicode.com/posts/1/comments");
    }

    getCommentsByParameter(): Observable<any>{
        let param1 = new HttpParams().set('userId',"2");
        return this.httpclient.get("https://jsonplaceholder.typicode.com/posts",{params: param1}); 
     }

     postService(oPost: Posts): Observable<any>{
        return this.httpclient.post("https://jsonplaceholder.typicode.com/posts",oPost);
     }

}