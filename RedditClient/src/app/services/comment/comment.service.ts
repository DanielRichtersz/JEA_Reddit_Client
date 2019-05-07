import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { ErrorHandlingService } from '../errorhandler/error-handling.service';
import { tap, catchError } from 'rxjs/operators';
import { Comment } from 'src/app/models/Comment';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient,
    private errorHandler: ErrorHandlingService) { }

    createComment(subredditName: string, username: string, content: string, postableId: string) : Observable<Comment> {
      console.log('CommentService.createComment method called');
      const url = 'http://localhost:8080/api/comments/';
  
      let body = new HttpParams();
      body = body.set('postableId', postableId);
      body = body.set('username', username);
      body = body.set('content', content);
  
      return this.http.post<Comment>(url, body, httpOptions)
        .pipe(
          tap(),
          catchError(this.errorHandler.handleError<Comment>('Creating comment')));
    }

    getComment(subredditName: string, commentId: string): Observable<Comment> {
      console.log("CommentService.getComment method called");
      const url = `http://localhost:8080/api/comments`;    
  
      return this.http.get<Comment>(url)
        .pipe(
          tap(),
          catchError(this.errorHandler.handleError<Comment>('Retrieving comment'))
        );
    }

    getCommentsFromPost(subredditName: string, postId: string, postTitle: string) {
      console.log("CommentService.getCommentsFromPost method called");
      const url = 'http://localhost:8080/api/subreddits/' + subredditName + '/posts/' + postId + '/' + postTitle + '/comments';
      console.log("Url is: ", url);
      return this.http.get<Array<Comment>>(url)
      .pipe(
        tap(),
        catchError(this.errorHandler.handleError<Array<Comment>>("Retrieving comments from post"))
      );
    }

    getCommentsFromComment(commentId: number) {
      console.log("CommentService.getCommentsFromComment method called");
      const url = 'http://localhost:8080/api/comments/' + commentId + '/comments';

      return this.http.get<Array<Comment>>(url)
      .pipe(
        tap(),
        catchError(this.errorHandler.handleError<Array<Comment>>("Retrieving comments from comment"))
      );
    }
}
