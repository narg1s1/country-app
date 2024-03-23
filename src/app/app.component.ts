import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CountryModule } from "./country/country.module";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './services/authentication.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CountryModule, HttpClientModule, CommonModule]
})
export class AppComponent {
  title = 'Where in the world ?';

  public username!: string;
  public password!: string;
  error = false;

  constructor(private router: Router, private authenticationService: AuthenticationService) {}

  public login(): void {
    if (this.authenticationService.login(this.username, this.password)) {
      localStorage.setItem('currentUser', this.username);
      this.router.navigate(['/']);
    } else {
      this.error = true;
    }
  }
}
