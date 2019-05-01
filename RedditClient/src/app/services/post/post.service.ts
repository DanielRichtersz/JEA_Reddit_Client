import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { Post } from 'src/app/models/Post';
import { ErrorHandlingService } from '../errorhandler/error-handling.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient,
    private errorHandler: ErrorHandlingService) { }

  getPost(subredditName: string, urlPostId: string, urlPostTitle: string): Observable<Post> {
    console.log("PostService.getPost method called");
    const url = `http://localhost:8080/api/subreddits/${subredditName}/posts/${urlPostId}/${urlPostTitle}`;

    return this.http.get<Post>(url)
      .pipe(
        tap(),
        catchError(this.errorHandler.handleError<Post>('Retrieving post'))
      );
  }
}
