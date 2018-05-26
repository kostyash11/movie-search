import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatInputModule,MatSelectModule,MatFormFieldModule,MatIconModule } from '@angular/material';
import { AppComponent } from './app.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchMovieService } from './search-movie.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchPanelComponent,
    MoviesContainerComponent
      ],
  imports: [
    BrowserModule,FormsModule,
    BrowserAnimationsModule,
    HttpClientModule, MatButtonModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
