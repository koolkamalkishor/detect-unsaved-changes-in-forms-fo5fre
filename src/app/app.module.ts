import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    AddMovieComponent,
    CategoriesComponent,
    AddCategoryComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
