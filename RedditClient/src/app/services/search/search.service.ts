import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { ErrorHandlingService } from '../errorhandler/error-handling.service';
import { Subreddit } from 'src/app/models/Subreddit';
import { Post } from 'src/app/models/Post';
import { Comment } from 'src/app/models/Comment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  constructor(
    private errorHandler: ErrorHandlingService,
    private http: HttpClient
  ) { }

  public searchForSubreddits(searchTerm: string) {
    console.log('SearchService.searchRedditForSubreddits method called');

    let url = 'http://localhost:8080/api/search/subreddits';
    let body = new HttpParams();
    body = body.set('searchTerm', searchTerm);

    return this.http.post<Array<Subreddit>>(url, body, httpOptions)
      .pipe(
        tap(),
        catchError(this.errorHandler.handleError<Array<Subreddit>>('Searching for subreddits'))
      );
  }

  public searchForPosts(searchTerm: string, subredditName?: string) {
    console.log('SearchService.searchRedditForPosts method called');

    let url = 'http://localhost:8080/api/search/posts';
    let body = new HttpParams();
    body = body.set('searchTerm', searchTerm);

    return this.http.post<Array<Post>>(url, body,  httpOptions)
    .pipe(
      tap(),
      catchError(this.errorHandler.handleError<Array<Post>>('Searching for posts'))
    );
  }

  public searchForComments(searchTerm: string) {
    console.log('SearchService.searchRedditForComments method called');

    let url = 'http://localhost:8080/api/search/comments';
    let body = new HttpParams();
    body = body.set('searchTerm', searchTerm);

    return this.http.post<Array<Comment>>(url, body,  httpOptions)
    .pipe(
      tap(),
      catchError(this.errorHandler.handleError<Array<Comment>>('Searching for comments'))
    );  
  }
}
