import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private isAuthenticated: boolean = false;
  // private userRole: string | null = null;

  constructor() { }

  // Method for user login
  public login(username: string, password: string, role: string): boolean {
    // Implement your authentication logic here
    // if ((role === 'Admin' && username === 'admin' && password === 'admin') ||
    //     (role === 'Operator' && username === 'operator' && password === 'operator')) {
    //   this.isAuthenticated = true;
    //   this.userRole = role;
    //   return true;
    // }
    return false;
  }

  // Method for user logout
  logout(): void {
    // this.isAuthenticated = false;
    // this.userRole = null;
  }

  // Check if user is authenticated
  isAuthenticatedUser(): boolean {
    // return this.isAuthenticated;
    return true;
  }

  // Get the role of the authenticated user
  getUserRole(): string | null {
    // return this.userRole;
    return '';
  }

  // Check if the authenticated user is an admin
  isUserAdmin(): boolean {
    // return this.userRole === 'Admin';
    return true;
  }

  // Check if the authenticated user is an operator
  isUserOperator(): boolean {
    // return this.userRole === 'Operator';
    return false;
  }
}
