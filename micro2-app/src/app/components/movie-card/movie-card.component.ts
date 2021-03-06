
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Movie } from 'src/app/models/movie';

import { MoviesService } from '../../services/movies.service'; 

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie = null;            //

  constructor(private moviesSevice:MoviesService) { }

  ngOnInit(): void 
  {
  }

  /*onDelete(movie){
    this.deleteMovies.emit(movie);
  }*/
  
}
