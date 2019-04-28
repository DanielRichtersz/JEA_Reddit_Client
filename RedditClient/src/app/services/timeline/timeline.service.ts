import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Subreddit } from 'src/app/models/Subreddit';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  private baseUrl = 'api/';  // URL to web api

  constructor(private http: HttpClient) { }

  public getFollowedSubreddits(username: string) : Observable<Array<Subreddit>> {
    console.log("getFollowedSubreddits method called");
    const url = `http://localhost:8080/api/redditors/${username}/timeline`;

    return this.http.get<Array<Subreddit>>(url)
      .pipe(
        tap(),
        catchError(this.handleError<Array<Subreddit>>('login'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.log("Error during login: " + error);

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
