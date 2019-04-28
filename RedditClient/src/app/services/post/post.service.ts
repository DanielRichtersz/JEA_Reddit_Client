import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { Post } from 'src/app/models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPost(subredditName: string, urlPostId: string, urlPostTitle: string): Observable<Post> {
    console.log("PostService.getPost method called");
    const url = `http://localhost:8080/api/subreddits/${subredditName}/posts/${urlPostId}/${urlPostTitle}`;

    return this.http.get<Post>(url)
      .pipe(
        tap(),
        catchError(this.handleError<Post>('Retrieving post'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.log("Error during PostService retrieval: " + error);

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
