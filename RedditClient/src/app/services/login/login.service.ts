import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Redditor } from '../../models/Redditor';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ErrorHandlingService } from '../errorhandler/error-handling.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUserSubject: BehaviorSubject<Redditor>;
  public currentUser: Observable<Redditor>;
  _currentUserId = null;

  private baseUrl = 'api/';  // URL to web api

  constructor(private http: HttpClient,
    private errorHandler: ErrorHandlingService) {
    this.currentUserSubject = new BehaviorSubject<Redditor>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Redditor {
    return this.currentUserSubject.value;
  }

  public login(username: string, password: string): Observable<Redditor> {
    console.log("Login method called");
    const url = `http://localhost:8080/api/redditors/${username}`;

    let observable = this.http.get<Redditor>(url)
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
}
