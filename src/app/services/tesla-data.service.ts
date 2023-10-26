import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeslaDataService {

  constructor(private http: HttpClient) { }

  scrollObj = new BehaviorSubject('');
  scrollObj$ = this.scrollObj.asObservable();

  getCars(): Observable<any> {
    return this.http.get('/assets/datas/product-listing.json');
  }
}
