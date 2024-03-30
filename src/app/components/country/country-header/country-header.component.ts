import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-header',
  templateUrl: './country-header.component.html',
  styleUrl: './country-header.component.scss'
})
export class CountryHeaderComponent {  
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  // Method to check if user is authenticated
  isAuthenticated(): boolean {
    return this.authService.isLoggedIn();
  }

  // Method to initiate the login process
  login(): void {
    this.router.navigate(['/login']);
  }

  // Method to initiate the logout process
  logout(): void {
    this.authService.logout();
  }
}
