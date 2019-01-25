import * as React from 'react';
import { IFilm } from '../Types';
import Fave from './Fave';
import FilmPoster from './FilmPoster';

export interface IFilmRowProps {
  film: IFilm;
  onFaveToggle: (film: IFilm) => void;
  handleDetailsClick: (film: IFilm) => void;
  isFave: boolean;
}

class FilmRow extends React.Component<IFilmRowProps, any> {

  public render() {
    const year: number = new Date(this.props.film.release_date).getFullYear();

    return (
      <div className="film-row" onClick={() => this.props.handleDetailsClick(this.props.film)}>
        <FilmPoster poster_path={this.props.film.poster_path} />

        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{year}</p>
        </div>
        <Fave
          onFaveToggle={() => this.props.onFaveToggle(this.props.film)}
          isFave={this.props.isFave}
        />
      </div>
    );
  }
}

export default FilmRow;
