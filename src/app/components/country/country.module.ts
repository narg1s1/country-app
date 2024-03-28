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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { UiIconsModule } from '../../../assets/ui-icons/ui-icons.module';

@NgModule({
  imports: [
    HttpClientModule, 
    MatDialogModule,
    RouterModule,
    FormsModule, 
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    SharedModule,
    CommonModule,
    UiIconsModule
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
