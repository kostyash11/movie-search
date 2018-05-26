export interface Movie {
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  Poster: string;
}
export interface MovieResponse {
  Response: string;
  totalResults: number;
  Search: Movie[]
}
export interface MoviesRequest {
  title: string;
  year?: number;
  page: number;
}


