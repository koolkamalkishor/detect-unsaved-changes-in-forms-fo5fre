import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { DirtyCheckGuard } from './guards/dirty-check.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'add-movie',
    component: AddMovieComponent,
    canDeactivate: [DirtyCheckGuard]
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'add-category',
    component: AddCategoryComponent,
    canDeactivate: [DirtyCheckGuard]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }