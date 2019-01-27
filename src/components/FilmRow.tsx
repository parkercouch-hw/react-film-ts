import * as React from 'react';
import { IFilm } from '../Types';
import Fave from './Fave';
import FilmPoster from './FilmPoster';

interface IFilmRowProps {
  film: IFilm;
  onFaveToggle: (film: IFilm) => void;
  handleDetailsClick: (film: IFilm) => void;
  isFave: boolean;
}

const FilmRow: React.SFC<IFilmRowProps> = (props) => {
  const year: number = new Date(props.film.release_date).getFullYear();

  return (
    <div className="film-row" onClick={() => props.handleDetailsClick(props.film)}>
      <FilmPoster poster_path={props.film.poster_path} />

      <div className="film-summary">
        <h1>{props.film.title}</h1>
        <p>{year}</p>
      </div>
      <Fave
        onFaveToggle={() => props.onFaveToggle(props.film)}
        isFave={props.isFave}
      />
    </div>
  );
};

export default FilmRow;
