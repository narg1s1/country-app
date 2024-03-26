import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import Country from '../../../models/country';
import { CountryService } from '../../../services/country.service';
import { AuthService } from '../../../services/authentication.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.scss'
})
export class CountryDetailComponent implements OnInit {
  public country!: Country;

  constructor(
    // private route: ActivatedRoute,
    // private countryService: CountryService,
    private location: Location,
    // private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.getCountry();
  }

  public getCountry(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // if (id !== null) {
    //   this.countryService.getCountry(id)
    //     .subscribe(country => this.country = country);
    // }
  }

  public isOperator(): boolean {
    return false;
    // return this.authService.isUserOperator();
  }

  public isAdmin(): boolean {
    // return this.authService.isUserAdmin();
    return true;
  }

  public updateCountry(): void {}

  public deleteCountry(): void {}

  public goBack(): void {
    this.location.back();
  }
}
