import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Post } from 'src/app/models/Post';
import { Subreddit } from 'src/app/models/Subreddit';
import { ErrorHandlingService } from '../errorhandler/error-handling.service';

@Injectable({
  providedIn: 'root'
})
export class SubredditService {

  constructor(private http: HttpClient,
    private errorHandler: ErrorHandlingService) { }

  public getSubredditTopPosts(start: number, end: number, subredditName: string) : Observable<Array<Post>> {
    console.log("SubredditService.getSubredditTopPosts method called");
    const url = `http://localhost:8080/api/subreddits/${subredditName}/posts/${start}/to/${end}`;

    return this.http.get<Array<Post>>(url)
      .pipe(
        tap(),
        catchError(this.errorHandler.handleError<Array<Post>>('Subreddit retrieving posts'))
      );
  }

  public getSubreddit(subredditName: string) : Observable<Subreddit> {
    console.log("SubredditService.getSubreddit method called");
    const url = `http://localhost:8080/api/subreddits/${subredditName}`;

    return this.http.get<Subreddit>(url)
    .pipe(
      tap(),
      catchError(this.errorHandler.handleError<Subreddit>('Retrieving subreddit'))
    );
  }

}
