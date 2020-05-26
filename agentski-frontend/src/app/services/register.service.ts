import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {User} from '../models/User'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'mode': 'cors'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  user:User;
  url:string = 'http://localhost:8282/register';

  constructor(private http:HttpClient) { }

  onRegister(user: User): Observable<User>{
    console.log('sending');
    return this.http.post<User>(this.url, user, httpOptions);
    

  }
}
