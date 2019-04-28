import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Post } from 'src/app/models/Post';
import { Subreddit } from 'src/app/models/Subreddit';

@Injectable({
  providedIn: 'root'
})
export class SubredditService {

  constructor(private http: HttpClient) { }

  public getSubredditTopPosts(start: number, end: number, subredditName: string) : Observable<Array<Post>> {
    console.log("SubredditService.getSubredditTopPosts method called");
    const url = `http://localhost:8080/api/subreddits/${subredditName}/posts/${start}/to/${end}`;

    return this.http.get<Array<Post>>(url)
      .pipe(
        tap(),
        catchError(this.handleError<Array<Post>>('Subreddit retrieving posts'))
      );
  }

  public getSubreddit(subredditName: string) : Observable<Subreddit> {
    console.log("SubredditService.getSubreddit method called");
    const url = `http://localhost:8080/api/subreddits/${subredditName}`;

    return this.http.get<Subreddit>(url)
    .pipe(
      tap(),
      catchError(this.handleError<Subreddit>('Retrieving subreddit'))
    );
  }

  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.log("Error during retrieval: " + error);

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
