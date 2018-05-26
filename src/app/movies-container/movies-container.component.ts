import { Component } from '@angular/core';
import { Movie, MovieResponse, MoviesRequest } from "../movie";
import { SearchMovieService } from '../search-movie.service';

@Component({
  selector: 'movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.css']
})
export class MoviesContainerComponent {
  totalCount: number = 0;
  loading: boolean = false;
  movies: Movie[];
  currentRequest: MoviesRequest = null;
  constructor(private searchMovieService: SearchMovieService) { }
  
  handleSearch(request) {
    this.currentRequest = request;
    this.loading = true;
    this.searchMovieService.getMovies(request).subscribe((data: MovieResponse) => {
      this.loading = false;
      this.totalCount = data.totalResults;
      this.movies = data.Search;
    });
  }
  handlePageChanged(page:number) {
    this.currentRequest.page = page+1;
    this.loading = true;
    this.searchMovieService.getMovies(this.currentRequest).subscribe((data: MovieResponse) => {
      this.loading = false;
      this.movies = data.Search;
    });
  }
}
