import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import Country from '../models/country';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1/all?fields=name,capital,currencies,region,population,flag';

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<any[]>(this.apiUrl)
    .pipe(
      map(response => response.map(country => ({
        name: country.name,
        capital: country.capital?.[0],
        currencies: country.currencies?.[0]?.name,
        flags: country.flags?.[0].svg,
        region: country.region,
        population: country.population,
        flag: country.flag,
      }))),
      catchError(error => {
        console.error('An error occurred while fetching the countries.', error);
        return throwError(error);
      })
    );
  }

  getCountry(name: string): Observable<Country> {
    const countryUrl = `https://restcountries.com/v3.1/name/${name}`;
    return this.http.get<Country>(countryUrl, {});
  }
}
