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

import { CountryService } from './services/country.service';
import { AuthService } from './services/authentication.service';
import { CountryModule } from './components/country/country.module';
import { UserAuthModule } from './components/user-auth/user-auth.module';
import { SharedModule } from './shared/shared.module';
import { UiIconsModule } from '../assets/ui-icons/ui-icons.module';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,

    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatPaginatorModule,
  
    UserAuthModule,
    CountryModule,
    UiIconsModule,
    SharedModule,
  ],
  providers: [CountryService, AuthService]
})
export class AppModule { }
