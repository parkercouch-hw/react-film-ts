import * as React from 'react';

interface IFilmPosterProps {
  poster_path: string;
}

const FilmPoster: React.SFC<IFilmPosterProps> = (props) => {
    const posterUrl = `https://image.tmdb.org/t/p/w780/${props.poster_path}`;

    return (
      <img src={posterUrl} alt="" />
    );
};

export default FilmPoster;
