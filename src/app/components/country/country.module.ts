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
import { MatIconModule } from '@angular/material/icon';
import { UiIconsModule } from '../../../assets/ui-icons/ui-icons.module';
import { UserAuthModule } from '../user-auth/user-auth.module';
import { CountryEditListComponent } from './country-list/country-edit-list/country-edit-list.component';

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
    MatIconModule,
  
    SharedModule,
    UiIconsModule,
    UserAuthModule,
  
    RouterModule.forChild(routes)
  ],
  declarations: [
    CountryListComponent,
    CountryDetailComponent,
    CountryHeaderComponent,
    CountryEditListComponent
  ],
  exports: [
    CountryListComponent, 
    CountryDetailComponent, 
    CountryHeaderComponent,
    CountryEditListComponent
  ],
})
export class CountryModule { }
