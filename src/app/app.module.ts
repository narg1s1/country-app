import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

import { CountryModule } from './country/country.module';
import { AuthGuard } from './services/auth.guard';
import { CountryService } from './services/country.service';
import { AuthenticationService } from './services/authentication.service';


@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    CommonModule,
    CountryModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatPaginatorModule,
    RouterModule,
    BrowserAnimationsModule,
    CountryModule,
  ],
  providers: [AuthGuard, CountryService, AuthenticationService]
})
export class AppModule { }
