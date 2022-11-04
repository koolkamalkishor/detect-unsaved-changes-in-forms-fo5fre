import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[];

  constructor() { }

  ngOnInit() {
    this.movies = [
      {
        name: 'The Godfather',
        year: 1972,
        image: 'https://cdn1.thr.com/sites/default/files/imagecache/320x480/2014/06/1_The_Godfather.jpg'
      },
      {
        name: 'The Wizard of Oz',
        year: 1939,
        image: 'https://cdn1.thr.com/sites/default/files/imagecache/320x480/2014/06/2_The_Wizard_of_Oz.jpg'
      },
      {
        name: 'Citizen Kane',
        year: 1941,
        image: 'https://cdn1.thr.com/sites/default/files/imagecache/320x480/2014/06/3_Citizen_Kane.jpg'
      },
      {
        name: 'The Shawshank Redemption',
        year: 1994,
        image: 'https://cdn1.thr.com/sites/default/files/imagecache/320x480/2014/06/shawshank2hinpeters.jpg'
      },
      {
        name: 'Pulp Fiction',
        year: 1994,
        image: 'https://cdn1.thr.com/sites/default/files/imagecache/1350x760/2014/06/5_Pulp_Fiction.jpg'
      },
      {
        name: 'Casablanca',
        year: 1942,
        image: 'https://cdn1.thr.com/sites/default/files/imagecache/1350x760/2014/06/6_Casablanca.jpg'
      },
      {
        name: 'The Godfather: Part II',
        year: 1974,
        image: 'https://cdn1.thr.com/sites/default/files/imagecache/1350x760/2014/06/7_The_Godfather_Part_II.jpg'
      },
      {
        name: 'E.T. The Extra-Terrestrial',
        year: 1982,
        image: 'https://cdn1.thr.com/sites/default/files/imagecache/320x480/2014/06/8_ET_The_Extra_Terrestrial.jpg'
      },
      {
        name: '2001: A Space Odyssey',
        year: 1968,
        image: 'https://cdn1.thr.com/sites/default/files/imagecache/1350x760/2014/06/9_2001_A_Space_Odyssey.jpg'
      },
      {
        name: 'Schindlers List',
        year: 1993,
        image: 'https://cdn1.thr.com/sites/default/files/imagecache/1350x760/2014/06/10_Schindlers_List.jpg'
      }
    ]
  }

}