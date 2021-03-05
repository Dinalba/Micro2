import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Array<Movie> = [];

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }
}
