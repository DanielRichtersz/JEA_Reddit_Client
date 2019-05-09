import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  constructor() { }

  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.log("Error: ");
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
