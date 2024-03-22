import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import Country from '../models/country';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1/all?fields=name,capital,currencies,region,population';

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<any[]>(this.apiUrl)
    .pipe(
      map(response => response.map(country => ({
        name: country.name.common,
        capital: country.capital?.[0],
        currencies: country.currencies?.[0]?.name,
        region: country.region,
        population: country.population,
        flagUrl: `https://countryflagsapi.netlify.app/flag/${country.countryIsoCode?.toLowerCase()}.svg`
      }))),
      catchError(error => {
        console.error('An error occurred while fetching the countries.', error);
        return throwError(error);
      })
    );
  }

  getCountry(id: string): Observable<Country> {
    const countryUrl = `https://restcountries.com/v3.1/alpha/${id}`;
    return this.http.get<any>(countryUrl).pipe(
      map(country => ({
        name: country.name.common,
        capital: country.capital?.[0],
        currencies: country.currencies?.[0]?.name,
        region: country.region,
        population: country.population,
        flagUrl: `https://countryflagsapi.netlify.app/flag/${country.cca2.toLowerCase()}.svg`
      }))
    );
  }
}
