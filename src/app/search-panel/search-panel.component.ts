import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MoviesRequest } from "../movie";

@Component({
  selector: 'search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {
  years: number[] = [];
  searchDisabled: boolean = true;
  title = '';
  year: number = null;
  @Output() searchChanged: EventEmitter<MoviesRequest> = new EventEmitter<MoviesRequest>();

  constructor() { }

  ngOnInit() {
    for (let i = 1930; i < 2019; i++) {
      this.years.push(i);
    }
  }
  handleTitleChange(title) {
    this.searchDisabled = !title;
  }

  handleYearChanged(year) {
    this.year = year;
  }

  handleSearchClick() {
    let request: MoviesRequest = { title: this.title, year: this.year, page: 1 };
    this.searchChanged.emit(request);
  }
}
