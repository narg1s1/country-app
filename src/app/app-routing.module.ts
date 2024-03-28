import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./components/user-auth/user-auth.module").then((m) => m.UserAuthModule),
  },
  {
    path: "",
    loadChildren: () => import("./components/country/country.module").then((m) => m.CountryModule),
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }