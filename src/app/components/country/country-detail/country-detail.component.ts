import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import Country from '../../../models/country';
import { CountryService } from '../../../services/country.service';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.scss'
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
      this.country$ = this.getCountry(name).pipe(
        map((countries: Country[]) => countries[0])
      );
    }
  }

  getCountry(name: string): Observable<Country[]> {
    const countryUrl = `https://restcountries.com/v3.1/name/${name}`;
    return this.http.get<Country[]>(countryUrl);
  }

  getCurrency(currencies: { [key: string]: { name: string; symbol: string; } }): string {
    const currency = Object.values(currencies)[0]; // Assuming only one currency is present
    return `${currency.name} (${currency.symbol})`;
  }

  getAllLanguages(languages: { [key: string]: string } | undefined): string[] {
    if (!languages) {
      return [];
    }
    return Object.values(languages);
  }

  public goBack(): void {
    this.location.back();
  }
}
