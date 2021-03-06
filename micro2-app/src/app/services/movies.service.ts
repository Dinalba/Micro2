import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { map } from 'rxjs/operators';
import {HttpClient,HttpHeaders} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private movieCollection: AngularFirestoreCollection<Movie>;

  apiKey: "?api_key=9ccff2d7346be3e27f87fe90d29642d6";
  apiUrl: "https://api.themoviedb.org/3/";

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
