import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Subreddit } from 'src/app/models/Subreddit';
import { tap, catchError } from 'rxjs/operators';
import { ErrorHandlingService } from '../errorhandler/error-handling.service';
import { LoginService } from '../login/login.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  private currentUser;
  private baseUrl = 'api/';  // URL to web api

  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlingService,
    private loginService: LoginService) {
      this.currentUser = this.loginService.currentUserValue;
     }

  public getFollowedSubreddits(username: string) : Observable<Array<Subreddit>> {
    //TODO: Remove authorisation token here, this is test only
    //if (this.currentUser != null) {
    //  httpOptions.headers.append("Authorisation", "Token " + this.currentUser.Token);
    //}

    console.log("TimelineService.getFollowedSubreddits method called");
    const url = `http://localhost:8080/api/redditors/${username}/timeline`;

    return this.http.get<Array<Subreddit>>(url, httpOptions)
      .pipe(
        tap(),
        catchError(this.errorHandler.handleError<Array<Subreddit>>('login'))
      );
  }
}
