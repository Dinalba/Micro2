import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { map } from 'rxjs/operators';
import {HttpClient, HttpHeaders } from '@angular/common/http' ;

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  private movieCollection: AngularFirestoreCollection<Movie>;

  movieUrl: 'http://www.foxmovies.com/movies/fight-club';
  constructor(private firestore: AngularFirestore, private http:HttpClient) {

    this.movieCollection = this.firestore.collection<Movie>('movies');
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
