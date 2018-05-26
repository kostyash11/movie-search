import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Movie, MovieResponse} from "./movie";

@Injectable({
  providedIn: 'root'
})
export class SearchMovieService {
  private baseUrl: string = 'http://www.omdbapi.com/?i=tt3896198&apikey=b4773d58';
  constructor(private http: HttpClient) { }

  getMovies(title: string,page:number=1, year?: number): Observable<any>{
    let url = `${this.baseUrl}&s=${title}&page=${page}`;
    url += year ? `&y=${year}` : "";


    return this.http.get<MovieResponse>(url).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
