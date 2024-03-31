import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import Country from '../models/country';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1/all?fields=name,capital,currencies,region,population,flags';

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl, {});
  }

  public getCountry(name: string): Observable<Country> {
    const countryUrl = `https://restcountries.com/v3.1/name/${name}`;
    return this.http.get<Country>(countryUrl, {});
  }

  public searchCountriesByName(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}name/${name}?fullText=true`, {});
  }
}
