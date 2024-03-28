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
  userRole: string = 'admin' || 'operator';
  errorMessage: string = '';

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private authService: AuthService
  ) {}

  // Method to check if user is authenticated
  isAuthenticated(): boolean {
    // return this.authService.isAuthenticatedUser();
    return false;
  }

  // Method to get the role of the authenticated user
  getUserRole(): string | null {
    // return this.authService.getUserRole();
    return '';
  }

  // Method to initiate the login process
  login(): void {
    this.router.navigate(['/login']);
  }

  // Method to initiate the logout process
  logout(): void {
    // console.log('Logout initiated');
    // this.authService.logout();
  }
}
