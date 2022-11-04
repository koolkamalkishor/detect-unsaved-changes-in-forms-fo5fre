import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DirtyComponent } from '../../models/dirty-component';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit, DirtyComponent {

  movieForm: FormGroup;
  isDirty = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.movieForm = this.fb.group({
      name: ['', Validators.required],
      year: ['', Validators.required],
      image: ['', Validators.required]
    });
    this.movieForm.valueChanges.subscribe( e => this.isDirty = true );
  }

  canDeactivate() {
    return this.isDirty;
  }

  addMovie() {
    console.log(this.movieForm.value);
  }

}