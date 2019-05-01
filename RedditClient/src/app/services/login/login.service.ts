import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Redditor } from '../../models/Redditor';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ErrorHandlingService } from '../errorhandler/error-handling.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'api/';  // URL to web api

  constructor(private http: HttpClient,
    private errorHandler: ErrorHandlingService) { 
    
  }

  public login(username: string, password: string): Observable<Redditor> {
    console.log("Login method called");
    const url = `http://localhost:8080/api/redditors/${username}`;

    return this.http.get<Redditor>(url)
      .pipe(
        tap(),
        catchError(this.errorHandler.handleError<Redditor>('login'))
      );
  }
}
