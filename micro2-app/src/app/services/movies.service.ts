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

  movieUrl: string = 'https://api.themoviedb.org/3/movie';

  movieLimit = '?_limit = 5';

  apiKey = "?api_key=9ccff2d7346be3e27f87fe90d29642d6";
  apiURL = "https://api.themoviedb.org/3/movie";

  constructor(private firestore: AngularFirestore, private http:HttpClient) {

    
    this.movieCollection = this.firestore.collection<Movie>('movies');

   }

   getMovie():Observable<Movie[]>{
     return this.http.get<Movie[]>(`${this.movieUrl}${this.movieLimit}`); 
     
     /*map((http) => {
      return changes.map((http) => ({
          id: http.payload.doc.id,
          ...http.payload.doc.data(), 
        }));
      })*/
    
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
