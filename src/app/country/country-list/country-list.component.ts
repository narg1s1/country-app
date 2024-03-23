import { Component, OnInit } from '@angular/core';
import Country from '../../models/country';
import { CountryService } from '../../services/country.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss'
})
export class CountryListComponent implements OnInit {
  public countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getCountries();
  }

  public getCountries(): void {
    this.countryService.getCountries().subscribe(countries => {
      this.countries = countries.map(country => ({
        ...country,
        flagUrl: this.getFlagUrl(country.flagUrl)
      }));
    });
  }

  public getFlagUrl(isoCode: string): string {
    return `https://countryflagsapi.netlify.app/flag/${isoCode}.svg`;
  }
}
