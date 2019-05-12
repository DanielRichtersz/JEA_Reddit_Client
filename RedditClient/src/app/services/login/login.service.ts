import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Redditor } from '../../models/Redditor';
import { Observable, of, observable, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ErrorHandlingService } from '../errorhandler/error-handling.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUserSubject: BehaviorSubject<Redditor>;
  public currentUser: Observable<Redditor>;
  _currentUserId = null;

  private baseUrl = 'api/';  // URL to web api

  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlingService) {
    this.currentUserSubject = new BehaviorSubject<Redditor>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Redditor {
    return this.currentUserSubject.value;
  }

  public login(username: string, password: string): Observable<Redditor> {
    console.log("LoginService.login method called");
    const url = "http://localhost:8080/login";

    let body = new HttpParams();
    body = body.set('username', username);
    body = body.set('password', password);

    let observable = this.http.post<Redditor>(url, body, httpOptions)
      .pipe(
        tap(),
        catchError(this.errorHandler.handleError<Redditor>('Login')));

    observable.subscribe(fRedditor => {
      if (fRedditor && fRedditor.token) {
        localStorage.setItem('currentUser', JSON.stringify(fRedditor));
        this.currentUserSubject.next(fRedditor);
      }
    });

    return observable;
  }

  public logout() {
    this.currentUser = null;
  }
}
