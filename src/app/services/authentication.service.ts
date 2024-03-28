import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject!: BehaviorSubject<User>;

  constructor(private http: HttpClient) { }

  // Method for user login
  login(email: string, password: string, role: string) {
    return this.http.post<any>(`/login`, { email, password, role })
    .pipe(map(user => {
      if (user && user.token) {
        // store user details in local storage to keep user logged in
        localStorage.setItem('currentUser', JSON.stringify(user.result));
        this.currentUserSubject.next(user);
      }
    }))
  }
  register(user: User) {
    return this.http.post(`auth/register`, user);
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
