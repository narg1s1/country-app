import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

import { CountryHeaderComponent } from './country-header/country-header.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { UiIconsModule } from '../../../assets/ui-icons/ui-icons.module';
import { UserAuthModule } from '../user-auth/user-auth.module';

const routes: Routes = [
  { path: '', component: CountryListComponent },
  { path: ':name', component: CountryDetailComponent }
];

@NgModule({
  imports: [
    HttpClientModule, 
    CommonModule,
    RouterModule,
    FormsModule, 
    ReactiveFormsModule,
  
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
  
    SharedModule,
    UiIconsModule,
    UserAuthModule,
  
    RouterModule.forChild(routes)
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
  ],
})
export class CountryModule { }
