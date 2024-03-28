import { Component, OnInit } from '@angular/core';
import Country from '../../../models/country';
import { CountryService } from '../../../services/country.service';
import { AuthService } from '../../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss'
})
export class CountryListComponent implements OnInit {
  public countries: Country[] = [];
  public allCountries: Country[] = [];

  public totalPages: number = 0;
  public currentPage: number = 1;
  public itemsPerPage: number = 12;

  constructor(
    private countryService: CountryService,
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.getCountries();
  }

  public getCountries(): void {
    this.countryService.getCountries().subscribe((allCountries: any[]) => {
      this.allCountries = allCountries.map(country => ({
        ...country,
        flagUrl: this.getFlagUrl(country.flagUrl)
      }));
      this.totalPages = Math.ceil(this.allCountries.length / this.itemsPerPage);
      this.onPageChange(this.currentPage); // Load the current page of countries
    });
  }
  
  public onPageChange(pageNumber: number) {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.countries = this.allCountries.slice(startIndex, endIndex);
    }
  }

  public filterCountries(): void {}

  public onSearch(searchTerm: string): void {}

  public getFlagUrl(isoCode: string): string {
    return `https://countryflagsapi.netlify.app/flag/${isoCode}.svg`;
  }

  
  public getCountryDetails(name: any): void {
    this.router.navigate(['/countries', name]);
  }

  public get userName(): string {
    return 'Admin';
  }
}
