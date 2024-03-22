import { Component, OnInit } from '@angular/core';
import Country from '../../models/country';
import { CountryService } from '../../services/country.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss'
})
export class CountryListComponent implements OnInit {
  public countries: Country[] | null = null;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService.getCountries().subscribe(countries => this.countries = countries);
  }
}
