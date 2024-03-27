import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import Country from '../../../models/country';
import { CountryService } from '../../../services/country.service';
import { AuthService } from '../../../services/authentication.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss'
})
export class CountryListComponent implements OnInit {
  public countries: Country[] = [];
  public allCountries: Country[] = [];

  filteredCountries: Country[] = [];
  regions: string[] = [];
  selectedRegion: string = '';

  public totalPages: number = 0;
  public currentPage: number = 1;
  public itemsPerPage: number = 12;

  constructor(
    private countryService: CountryService,
    public authService: AuthService
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

  public filterCountries(): void {
    if (this.selectedRegion) {
      this.countries = this.allCountries.filter(country => country.region === this.selectedRegion);
    } else {
      this.countries = [...this.allCountries]; // Reset to all countries if no region is selected
    }
    this.totalPages = Math.ceil(this.countries.length / this.itemsPerPage);
    this.onPageChange(1); // Reset to first page after filtering
  }
  
  public onPageChange(pageNumber: number) {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.countries = this.allCountries.slice(startIndex, endIndex);
    }
  }

  public getFlagUrl(isoCode: string): string {
    // return `https://countryflagsapi.netlify.app/flag/${isoCode}.svg`;
    return `https://countryflagsapi.netlify.app/flag/MT.svg`;
  }

  public get userName(): string {
    return 'Admin';
  }
}
