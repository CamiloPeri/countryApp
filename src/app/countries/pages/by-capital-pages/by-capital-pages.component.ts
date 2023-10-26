import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital-pages',
  templateUrl: './by-capital-pages.component.html',
  styles: [],
})
export class ByCapitalPagesComponent {
  public countries: Country[] = [];
  constructor(private countriesService: CountriesService) {}
  searchByCapital(value: string, param: string) {
    this.countriesService
      .search(value, param)
      .subscribe((countries) => (this.countries = countries));
  }
}
