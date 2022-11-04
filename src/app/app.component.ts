import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  menuItems = [
    {
      name: 'Movies',
      link: '/movies'
    },
    {
      name: 'Add Movie',
      link: '/add-movie'
    },
    {
      name: 'Categories',
      link: '/categories'
    },
    {
      name: 'Add Category',
      link: '/add-category'
    }
  ];
}