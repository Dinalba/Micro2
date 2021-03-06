import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Movie } from '../models/movie';

import { map } from 'rxjs/operators';
import {HttpClient, HttpHeaders } from '@angular/common/http' ;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  private movieCollection: AngularFirestoreCollection<Movie>;

  movieUrl: string = 'http://www.foxmovies.com/movies/fight-club';

  movieLimit = '?_limit = 5';

  constructor(private firestore: AngularFirestore, private http:HttpClient) {

    this.movieCollection = this.firestore.collection<Movie>('movies');
   }

   getMovie():Observable<Movie[]>{
     return this.http.get<Movie[]>(`${this.movieUrl}${this.movieLimit}`); 
   }

   getAllMovies(): Observable<Movie[]>{
    return this.movieCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((movies) => ({
          id: movies.payload.doc.id,
          ...movies.payload.doc.data(), 
        }));
      })
    );
   }


}
