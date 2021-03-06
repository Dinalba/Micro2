import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {

  movies: Array<Movie> = [];

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.getAllMovies();
      }

  getAllMovies(): void {
    this.movieService.getAllMovies().subscribe((movies) => {
      this.movies = movies;
    })
  }

}
