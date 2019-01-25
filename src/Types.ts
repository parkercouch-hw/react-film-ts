export interface IFilm {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
};

export interface ITMDB {
  api_key: string;
  films: IFilm[];
}
