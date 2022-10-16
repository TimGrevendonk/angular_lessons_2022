import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, timer } from 'rxjs';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) {
  }

  getCountries(filter: string) : Observable<Country[]>{
    return this.httpClient.get<Country[]>(`http://localhost:3000/countries?name_like=${filter}`)
  }
}
