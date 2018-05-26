import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {
  years: number[] = [];
  disabled: boolean;
  value = '';
  constructor() { }

  ngOnInit() {
    for (let i = 1930; i < 2019; i++) {
      this.years.push(i);
    }
  }

}
