import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { Post } from 'src/app/models/Post';
import { ErrorHandlingService } from '../errorhandler/error-handling.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  constructor(private http: HttpClient,
    private errorHandler: ErrorHandlingService) { }

    createPost(postTitle: string, postContent: string, subredditName: string, username: string) {
      console.log('PostService.createPost method called');
      const url = 'http://localhost:8080/api/subreddits/' + subredditName + '/posts';
  
      let body = new HttpParams();
      body = body.set('username', username);
      body = body.set('title', postTitle);
      body = body.set('content', postContent);
  
      return this.http.post<Post>(url, body, httpOptions)
        .pipe(
          tap(),
          catchError(this.errorHandler.handleError<Post>('Creating post')));
    }

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
