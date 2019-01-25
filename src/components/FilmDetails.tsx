import * as React from 'react';
import { IFilm } from '../Types';

export interface IFilmDetailsProps {
  film: IFilm | {};
}

class FilmDetails extends React.Component<IFilmDetailsProps, any> {
  public render() {
    return (
      <div className="film-details">
        <h1 className="section-title">Details</h1>
      </div>
    );
  }
}

export default FilmDetails;
