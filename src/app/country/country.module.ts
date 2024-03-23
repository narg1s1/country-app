import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, 
    HttpClientModule, 
    RouterModule, 
    FormsModule, 
    MatPaginatorModule
  ],
  declarations: [CountryListComponent, CountryDetailComponent],
  exports: [CountryListComponent, CountryDetailComponent]
})
export class CountryModule { }
