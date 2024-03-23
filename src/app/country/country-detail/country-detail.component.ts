import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Country from '../../models/country';
import { Location } from '@angular/common';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.scss'
})
export class CountryDetailComponent implements OnInit {
  public country: Country | null = null;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.countryService.getCountry(id)
        .subscribe(country => this.country = country);
    }
  }

  goBack(): void {
    this.location.back();
  }
}
