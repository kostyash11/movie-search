export interface Movie {
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  Poster: string;
}
export interface MovieResponse {
  Response: string;
  movies: Movie[]
}

