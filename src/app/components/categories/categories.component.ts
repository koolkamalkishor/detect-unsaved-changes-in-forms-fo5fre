import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories = [
    'Classic',
    'Crime',
    'Drama',
    'Fantasy',
    'Cult',
    'Action',
    'Sports',
    'Horror',
    'War',
    'Road'
  ];

  constructor() { }

  ngOnInit() {
  }

}