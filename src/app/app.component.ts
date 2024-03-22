import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountryModule } from "./country/country.module";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CountryModule, HttpClientModule, CommonModule]
})
export class AppComponent {
  title = 'country-app';
}
