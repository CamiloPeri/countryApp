import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  public routes = [
    // {
    //   title: 'Home page',
    //   route: 'home',
    // },
    // {
    //   title: 'About page',
    //   route: 'about',
    // },
    // {
    //   title: 'Contact page',
    //   route: 'contact',
    // },
    {
      title: 'Capital',
      route: 'countries/by-capital',
    },
    {
      title: 'Pais',
      route: 'countries/by-country',
    },
    {
      title: 'Region',
      route: 'countries/by-region',
    },
  ];
}
