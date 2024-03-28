import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./components/user-auth/user-auth.module").then((m) => m.UserAuthModule),
  },
  {
    path: "countries",
    loadChildren: () => import("./components/country/country.module").then((m) => m.CountryModule),
  },
  {
    path: "**",
    redirectTo: "countries",
    pathMatch: 'full'
  }
];
