import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital-pages',
  templateUrl: './by-capital-pages.component.html',
  styles: [],
})
export class ByCapitalPagesComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;

  public initialValue: string = '';

  constructor(private countriesService: CountriesService) {}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }
  searchByCapital(value: string, param: string) {
    this.isLoading = true;
    this.countriesService
      .search(value, param)
      .subscribe(
        (countries) => ((this.countries = countries), (this.isLoading = false))
      );
  }
}
