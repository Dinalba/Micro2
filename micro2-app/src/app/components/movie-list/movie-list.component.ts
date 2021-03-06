import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  @Input() 
  movies: Array<Movie> = [];

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.getAllMovies();
    this.movieService.getMovie().subscribe( movie =>  {
      this.movies = movie; 
    });
  }

  getAllMovies(): void{ 
     this.movieService.getAllMovies().subscribe((movies) => {
       this.movies = movies
     })
  };

}
