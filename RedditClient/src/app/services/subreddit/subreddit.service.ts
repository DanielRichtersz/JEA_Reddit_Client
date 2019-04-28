import { Injectable } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post/post.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from 'src/app/models/Post';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubredditService {

  private baseUrl = 'api/';  // URL to web api

  constructor(private http: HttpClient) { }

  public getSubredditTopPosts(start: number, end: number, subredditName: string) {
    console.log("getSubredditTopPosts method called");
    const url = `http://localhost:8080/api/subreddits/${subredditName}/posts/${start}/to/${end}`;

    return this.http.get<Array<Post>>(url)
      .pipe(
        tap(),
        catchError(this.handleError<Array<Post>>('Subreddit retrieving posts'))
      );
  }

  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.log("Error during post retrieval: " + error);

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
