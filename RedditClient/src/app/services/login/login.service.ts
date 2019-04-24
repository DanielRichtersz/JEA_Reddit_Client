import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Redditor } from '../../models/Redditor';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'api/';  // URL to web api

  constructor(private http: HttpClient) { 
    
  }

  login(username: string, password: string): Observable<Redditor> {
    console.log("Login method called");
    const url = `http://localhost:8080/api/redditors/${username}`;

    return this.http.get<Redditor>(url)
      .pipe(
        tap(),
        catchError(this.handleError<Redditor>('login'))
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
