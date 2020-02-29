import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Phones } from './phones';
import { Observable } from 'rxjs';

const localUrl = "assets/data/smartphone.json";
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getSmartphones(): Observable<HttpResponse<Phones[]>>{
    // return this.http.get(localUrl);
    return this.http.get<Phones[]>(
      localUrl, {observe: 'response'}
    );
  }

}
