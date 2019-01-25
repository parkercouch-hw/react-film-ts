import * as React from 'react';
import { IFilm } from '../Types';

export interface IFaveProps {
  isFave: boolean;
  film?: IFilm;
  onFaveToggle: () => void;
}

interface IFaveState {
  x?: any;
}

class Fave extends React.Component<IFaveProps, IFaveState> {

  public handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    this.props.onFaveToggle();
  }

  public render() {
    const queueClass = this.props.isFave ? 'remove_from_queue' : 'add_to_queue';

    return (
      <div className={`film-row-fave ${queueClass}`} onClick={this.handleClick}>
        <p className="material-icons">{queueClass}</p>
      </div>
    );
  }
}

export default Fave;
