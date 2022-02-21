import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NumericValue } from '../../interfaces/NumericValue';

@Injectable({
  providedIn: 'root',
})
export class RandomNumberService {
  BASE_URL = 'http://localhost:3333';

  constructor(private http: HttpClient) {}

  public getRandomNumber(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/api/random`);
  }

  public createMultipleRandomNumber(number: number): Observable<NumericValue> {
    return this.http.post<NumericValue>(
      `${this.BASE_URL}/api/create-multiple/`,
      number
    );
  }
}
