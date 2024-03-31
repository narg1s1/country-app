import { Component, OnInit } from '@angular/core';
import Country from '../../../models/country';
import { CountryService } from '../../../services/country.service';
import { AuthService } from '../../../services/authentication.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CountryEditListComponent } from './country-edit-list/country-edit-list.component';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'] // Corrected styleUrl to styleUrls
})
export class CountryListComponent implements OnInit {
  // Array to hold countries data
  public countries: Country[] = [];
  public allCountries: Country[] = [];

  // Pagination variables
  public totalPages: number = 0;
  public currentPage: number = 1;
  public itemsPerPage: number = 10;

  constructor(
    public dialog: MatDialog,
    private countryService: CountryService,
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit(): void {
    // Initialize component
    this.getCountries();
  }

  // Fetch all countries
  getCountries(): void {
    this.countryService.getCountries().subscribe((allCountries: Country[]) => {
      this.allCountries = allCountries.map(country => ({ ...country }));
      this.totalPages = Math.ceil(this.allCountries.length / this.itemsPerPage);
      this.onPageChange(this.currentPage); // Load the current page of countries
    });
  }

  // Method to handle pagination
  public onPageChange(pageNumber: number): void {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.countries = this.allCountries.slice(startIndex, endIndex);
    }
  }

  // Method to filter countries by region
  public filterCountries(): void {
    // Implementation of filtering logic
  }

  // Method to search countries by name
  public searchCountriesByName(name: string): void {
    if (name) {
      // Filter countries based on search query
      this.countries = this.allCountries.filter((val) => val.name.common.toLowerCase().includes(name));
      this.totalPages = Math.ceil(this.countries.length / this.itemsPerPage);
    } else {
      this.getCountries(); // If search query is empty, load all countries
      this.onPageChange(1);
    }
  }

  // Method to open country edit dialog
  public editCountry(country: Country): void {
    const dialogRef = this.dialog.open(CountryEditListComponent, {
      width: '500px', 
      data: country 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle edit operation
        console.log('Country updated:', result);
        this.getCountries(); // Refresh country data after edit
      }
    });
  }

  // Method to delete a country
  public deleteCountry(country: Country): void {
    const index = this.allCountries.findIndex(c => c.name === country.name);
    if (index !== -1) {
      this.countries.splice(index, 1); // Remove country from displayed list
    }
  }

  // Method to navigate to country details page
  public getCountryDetails(name: any): void {
    this.router.navigate(['/countries', name]);
  }

  // Method to get the role of the authenticated user
  public get userRole(): string | undefined {
    return this.authService.currentUserValue ? this.authService.currentUserValue.role : undefined;
  }

  // Method to check if the user is an admin
  public get isAdmin(): boolean {
    return this.authService.isAdmin();
  }
  
  // Method to check if the user is authenticated
  public isAuthenticated(): boolean {
    return this.authService.isLoggedIn();
  }
}
