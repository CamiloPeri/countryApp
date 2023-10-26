import { Component, Input } from '@angular/core';
import { Country } from 'src/app/countries/interfaces/country';

@Component({
  selector: 'shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.css'],
})
export class SharedTableComponent {
  @Input()
  public data: Country[] = [];
}
