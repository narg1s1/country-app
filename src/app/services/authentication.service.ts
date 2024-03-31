import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface UserData {
  email: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<UserData | null>;
  public currentUser: Observable<UserData | null>;

  constructor() {
    // Initialize currentUserSubject with data from localStorage if available
    const currentUser = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<UserData | null>(currentUser ? JSON.parse(currentUser) : null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // Getter to access current user data
  public get currentUserValue(): UserData | null {
    return this.currentUserSubject.value;
  }

  // Method to simulate user login
  public login(email: string, password: string, role: string): Observable<boolean> {
    // Mocking authentication request. Replace this with actual API call.
    const authenticatedUser = this.authenticate(email, password, role);
    if (authenticatedUser) {
      // Set authenticated user data to localStorage and update currentUserSubject
      localStorage.setItem('currentUser', JSON.stringify(authenticatedUser));
      this.currentUserSubject.next(authenticatedUser);
      return of(true);
    } else {
      return of(false);
    }
  }

  // Method to authenticate user
  private authenticate(email: string, password: string, role: string): UserData | null {
    // Replace this with actual authentication logic.
    const validCredentials = [
      { email: 'admin@example.com', password: 'adminpassword', role: 'admin' },
      { email: 'operator@example.com', password: 'operatorpassword', role: 'operator' }
    ];
    const user = validCredentials.find(
      cred => cred.email === email && 
              cred.password === password && 
              cred.role === role);
    return user ? { email: user.email, role: user.role } : null;
  }

  // Method to simulate user logout
  public logout(): void {
    // Remove currentUser data from localStorage and update currentUserSubject
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  // Method to check if user is logged in
  public isLoggedIn(): boolean {
    return !!this.currentUserValue;
  }

  // Method to check if user is an admin
  public isAdmin(): boolean {
    return this.isLoggedIn() && this.currentUserValue?.role === 'admin';
  }

  // Method to check if user is an operator
  public isOperator(): boolean {
    return this.isLoggedIn() && this.currentUserValue?.role === 'operator';
  }
}
