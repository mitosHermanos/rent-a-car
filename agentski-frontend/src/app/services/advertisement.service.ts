import { Injectable } from '@angular/core';
import { Pricing } from '../models/Pricing';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'mode': 'cors'
  })
}
@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {
  pricing: Pricing;
  url1:string = 'http://localhost:8282/addPricing';
  constructor(private http:HttpClient) { }
  addPricing(pricing: Pricing): Observable<Pricing>{
    console.log('sending');
    return this.http.post<Pricing>( this.url1, pricing, httpOptions);
  }
}