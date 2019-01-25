import * as React from 'react';
import { IFilm } from '../Types';
import FilmRow from './FilmRow';

export interface IFilmListingProps {
  films: IFilm[];
  handleDetailsClick: (film: IFilm) => void;
}

interface IFilmListingState {
  faves: IFilm[];
  filter: TFilter;
}

enum Filter {
  All = 'all',
  Faves = 'faves',
}

type TFilter = Filter.All | Filter.Faves;

class FilmListing extends React.Component<IFilmListingProps, IFilmListingState> {
  public state: IFilmListingState = {
    faves: [],
    filter: Filter.All,
  };

  public handleFilterClick = (filter: TFilter) => {
    this.setState({
      filter,
    });
  }

  public handleFaveToggle = (film: IFilm) => {
    const faves = this.state.faves.slice();
    const filmIndex = faves.map((f: IFilm) => f.id).indexOf(film.id);
    if (filmIndex === -1) {
      faves.push(film);
      console.log(`Adding ${film.title} to faves`);
    } else {
      faves.splice(filmIndex, 1);
      console.log(`Removing ${film.title} from faves`);
    }
    this.setState({
      faves,
    });
  }

  public render() {
    const filmsToDisplay = this.state.filter === Filter.Faves ? this.state.faves : this.props.films;

    const allFilms = filmsToDisplay.map((film) => {
      return (
        <FilmRow
          key={film.id}
          film={film}
          onFaveToggle={this.handleFaveToggle}
          isFave={this.state.faves.map((f: IFilm) => f.id).includes(film.id)}
          handleDetailsClick={this.props.handleDetailsClick}
        />
      );
    });

    return (
      <div className="film-list">
        <h1 className="section-title">Films</h1>
        <div className="film-list-filters">
          <div className={`film-list-filter ${this.state.filter === Filter.All ? 'is-active' : ''}`}
            onClick={() => this.handleFilterClick(Filter.All)}>
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className={`film-list-filter ${this.state.filter === Filter.Faves ? 'is-active' : ''}`}
            onClick={() => this.handleFilterClick(Filter.Faves)}>
            FAVES
            <span className="section-count">{this.state.faves.length}</span>
          </div>
        </div>
        {allFilms}
      </div>
    );
  }
}

export default FilmListing;
