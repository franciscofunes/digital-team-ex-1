import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RandomNumberService {
  constructor(private http: HttpClient) {}

  public getRandomNumber(): Observable<any> {
    const apiUrl = 'http://localhost:3333/api/random/';
    return this.http.get<number>(apiUrl);
  }
}
