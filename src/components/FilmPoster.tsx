import * as React from 'react';

export interface IFilmPosterProps {
  poster_path: string;
}

class FilmPoster extends React.Component<IFilmPosterProps, any> {
  public render() {
    const posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.poster_path}`;

    return (
      <img src={posterUrl} alt="" />
    );
  }
}

export default FilmPoster;
