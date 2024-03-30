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
    const currentUser = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<UserData | null>(currentUser ? JSON.parse(currentUser) : null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserData | null {
    return this.currentUserSubject.value;
  }

  public login(email: string, password: string, role: string): Observable<boolean> {
    // Mocking authentication request. Replace this with actual API call.
    const authenticatedUser = this.authenticate(email, password, role);
    if (authenticatedUser) {
      localStorage.setItem('currentUser', JSON.stringify(authenticatedUser));
      this.currentUserSubject.next(authenticatedUser);
      return of(true);
    } else {
      return of(false);
    }
  }

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

  public logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  public isLoggedIn(): boolean {
    return !!this.currentUserValue;
  }

  public isAdmin(): boolean {
    return this.isLoggedIn() && this.currentUserValue?.role === 'admin';
  }

  public isOperator(): boolean {
    return this.isLoggedIn() && this.currentUserValue?.role === 'operator';
  }
}
