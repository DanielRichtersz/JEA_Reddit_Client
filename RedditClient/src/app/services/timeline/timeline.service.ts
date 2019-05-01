import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Subreddit } from 'src/app/models/Subreddit';
import { tap, catchError } from 'rxjs/operators';
import { ErrorHandlingService } from '../errorhandler/error-handling.service';


@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  private baseUrl = 'api/';  // URL to web api

  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlingService) { }

  public getFollowedSubreddits(username: string) : Observable<Array<Subreddit>> {
    console.log("getFollowedSubreddits method called");
    const url = `http://localhost:8080/api/redditors/${username}/timeline`;

    return this.http.get<Array<Subreddit>>(url)
      .pipe(
        tap(),
        catchError(this.errorHandler.handleError<Array<Subreddit>>('login'))
      );
  }
}
