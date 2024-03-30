import { Component, OnInit } from '@angular/core';
import Country from '../../../models/country';
import { CountryService } from '../../../services/country.service';
import { AuthService } from '../../../services/authentication.service';
import { Router } from '@angular/router';
import { CountryEditListComponent } from './country-edit-list/country-edit-list.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss'
})
export class CountryListComponent implements OnInit {
  public countries: Country[] = [];
  public allCountries: Country[] = [];

  public selectedRegion!: string;
  public regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  public totalPages: number = 0;
  public currentPage: number = 1;
  public itemsPerPage: number = 10;

  constructor(
    public dialog: MatDialog,
    private countryService: CountryService,
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService.getCountries().subscribe((allCountries: Country[]) => {
      this.allCountries = allCountries.map(country => ({ ...country }));
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

  public searchCountriesByName(name: string): void {
    if (name) { // Проверяем, что name не является undefined или null
      this.countries = this.allCountries.filter((val) => val.name.common.toLowerCase().includes(name));
      this.totalPages = Math.ceil(this.countries.length / this.itemsPerPage);
    } else {
      this.getCountries(); // If search query is empty, load all countries
      this.onPageChange(1);
    }
  }

  public editCountry(country: Country): void {
    const dialogRef = this.dialog.open(CountryEditListComponent, {
      width: '500px', 
      data: country 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // I didn't find the endpoint for editing and deleting a country in REST API
        console.log('Country updated:', result);
        this.getCountries();
      }
    });
  }

  public deleteCountry(country: Country): void {
    const index = this.allCountries.findIndex(c => c.name === country.name);
    if (index !== -1) {
      this.countries.splice(index, 1);
    }
  }

  public getFlagUrl(flag: string): string {
    return `https://countryflagsapi.netlify.app/emoji/${flag}.svg`;
  }

  public getCountryDetails(name: any): void {
    this.router.navigate(['/countries', name]);
  }

  // Method to get the role of the authenticated user
  get userRole(): string | undefined {
    return this.authService.currentUserValue ? this.authService.currentUserValue.role : undefined;
  }

  // Method to get the Admin role for allowing to edit the cards
  get isAdmin(): boolean {
    return this.authService.isAdmin();
  }
  
  public isAuthenticated(): boolean {
    return this.authService.isLoggedIn();
  }
}
