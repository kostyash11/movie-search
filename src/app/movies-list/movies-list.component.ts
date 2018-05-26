import { Component, Input, EventEmitter } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {
  @Input() loading: boolean = false;
  @Input() totalCount: number;
  @Input() movies: Movie[];
}
