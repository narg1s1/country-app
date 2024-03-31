import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import Country from '../../../models/country';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
  country$!: Observable<Country>;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private location: Location,
  ) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.country$ = this.fetchCountry(name);
    }
  }

  // Fetches country data from API
  private fetchCountry(name: string): Observable<Country> {
    const countryUrl = `https://restcountries.com/v3.1/name/${name}`;
    return this.http.get<Country[]>(countryUrl).pipe(
      map((countries: Country[]) => countries[0])
    );
  }

  // Formats currency information
  getCurrency(currencies: { [key: string]: { name: string; symbol: string; } }): string {
    const currency = Object.values(currencies)[0]; // Assuming only one currency is present
    return `${currency.name} (${currency.symbol})`;
  }

  // Retrieves an array of all languages
  getAllLanguages(languages: { [key: string]: string } | undefined): string[] {
    return languages ? Object.values(languages) : [];
  }

  // Navigates back
  goBack(): void {
    this.location.back();
  }
}
