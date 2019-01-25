import * as React from 'react';
import './App.css';

import FilmDetails from './components/FilmDetails';
import FilmListing from './components/FilmListing';

import { IFilm, ITMDB} from './Types';

import TMDB from './TMDB';

export interface IAppProps {
  placeholder?: any;
}

interface IAppState {
  current: IFilm | {};
  films: IFilm[];
}

class App extends React.Component<IAppProps, IAppState> {
  public readonly state: IAppState = {
    current: {},
    films: TMDB.films,
  };

  public handleDetailsClick = (film: IFilm) => {
    const current = film;
    console.log('Fetching details for', film.title);
    this.setState({
      current,
    });
  }

  public render() {
    return (
      <div className="App">
        <div className="film-libarary">
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
