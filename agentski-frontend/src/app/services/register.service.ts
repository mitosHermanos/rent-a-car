import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {RegisterUser} from '../models/RegisterUser'

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
  
  registerUser:RegisterUser;
  url:string = 'http://localhost:8282/api/register';

  constructor(private http:HttpClient) { }

  onRegister(registerUser: RegisterUser): Observable<RegisterUser>{
    console.log('sending');
    return this.http.post<RegisterUser>(this.url, registerUser, httpOptions);
    

  }
}
