import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private movieCollection: AngularFirestoreCollection<Movie>;
  constructor(private firestore: AngularFirestore) {
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
