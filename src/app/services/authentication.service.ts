import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticated: boolean = false;
  private userRole: string | null = null;

  constructor() { }

  // Method for user login
  login(username: string, password: string): boolean {
    // Implement your authentication logic here
    // For example, check username/password and determine user role
    if (username === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
      this.userRole = 'Admin';
      return true;
    } else if (username === 'operator' && password === 'operator') {
      this.isAuthenticated = true;
      this.userRole = 'Operator';
      return true;
    }
    return false;
  }

  // Method for user logout
  logout(): void {
    this.isAuthenticated = false;
    this.userRole = null;
  }

  // Check if user is authenticated
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  // Get the role of the authenticated user
  getUserRole(): string | null {
    return this.userRole;
  }

  // Check if the authenticated user is an admin
  isUserAdmin(): boolean {
    return this.userRole === 'Admin';
  }

  // Check if the authenticated user is an operator
  isUserOperator(): boolean {
    return this.userRole === 'Operator';
  }
}
