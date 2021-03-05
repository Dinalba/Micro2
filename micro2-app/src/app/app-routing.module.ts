import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { SelectedMoviePageComponent } from './pages/selected-movie-page/selected-movie-page.component';

const routes: Routes = [  
 {
   path:'',
   component: HomeComponent
 },
 {
   path:'movies',
   component: MoviePageComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
