import { Component, OnInit } from '@angular/core';
import { SearchMovieService } from './search-movie.service';
import { Movie, MovieResponse} from "./movie";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private searchMovieService: SearchMovieService) {}
  title = 'app';
  ngOnInit() {
    this.searchMovieService.getMovies('terminator').subscribe((data: MovieResponse) => console.log(data.movies));
  }
}
