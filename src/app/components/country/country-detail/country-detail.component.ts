import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import Country from '../../../models/country';
import { CountryService } from '../../../services/country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.scss'
})
export class CountryDetailComponent implements OnInit {
  public country!: Country;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getCountry();
  }

  public getCountry(): void {
    const name = this.route.snapshot.paramMap.get('name');
    
    if (name !== null) {
      this.countryService.getCountry(name)
        .subscribe(country => this.country = country);
    }
  }

  public goBack(): void {
    this.location.back();
  }
}
