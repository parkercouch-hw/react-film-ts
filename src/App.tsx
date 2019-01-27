import * as React from 'react';

import FilmDetails from './components/FilmDetails';
import FilmListing from './components/FilmListing';

import { IFilm, MaybeFilm } from './Types';

import TMDB from './TMDB';

export interface IAppProps {
  placeholder?: any;
}

interface IAppState {
  current: MaybeFilm;
  films: IFilm[];
}

class App extends React.Component<IAppProps, IAppState> {
  public readonly state: IAppState = {
    current: null,
    films: TMDB.films,
  };

  public handleDetailsClick = (film: IFilm) => {
    const current = film;
    console.log('Fetching details for', film.title);
    const url =
      `https://api.themoviedb.org/3/movie/${film.id}` +
      `?api_key=${TMDB.api_key}` +
      '&append_to_response=videos,images&language=en';

    fetch(url).then((response) => {
      response.json().then((data) => {
        console.log(data);
      });
    });

    this.setState({
      current,
    });
  }

  public render() {
    return (
      <div className="App">
        <div className="film-library">
          <FilmListing
            films={this.state.films}
            handleDetailsClick={this.handleDetailsClick}
          />
          <FilmDetails
            film={this.state.current}
          />
        </div>
      </div>
    );
  }
}

export default App;
