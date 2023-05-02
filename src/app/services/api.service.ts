import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getpost(){
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(res=>{
      console.log("this is from server", res)
    })
  } 
}
