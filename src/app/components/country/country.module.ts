import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { CountryHeaderComponent } from './country-header/country-header.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';

@NgModule({
  imports: [
    HttpClientModule, 
    MatDialogModule,
    RouterModule,
    FormsModule, 
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    SharedModule,
    CommonModule
  ],
  declarations: [
    CountryListComponent,
    CountryDetailComponent,
    CountryHeaderComponent,
  ],
  exports: [
    CountryListComponent, 
    CountryDetailComponent, 
    CountryHeaderComponent,
  ]
})
export class CountryModule { }
