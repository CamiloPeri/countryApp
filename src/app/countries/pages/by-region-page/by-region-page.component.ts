import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../types/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent {
  public region: Country[] = [];
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  public selectedRegion?: Region;

  constructor(private countriesService: CountriesService) {}

  searchByRegion(value: Region, param: string) {
    this.selectedRegion = value;
    this.countriesService
      .search(value, param)
      .subscribe((region) => (this.region = region));
  }
}
