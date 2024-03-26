import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailComponent } from './components/country/country-detail/country-detail.component';
import { LoginComponent } from './components/user-auth/login/login.component';
import { CountryListComponent } from './components/country/country-list/country-list.component';

const routes: Routes = [
  { path: '', component: CountryListComponent },
  { path: 'country/:name', component: CountryDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }